// -------------------------- CARRITO DE COMPRA -------------------------

const CLAVE_CARRITO = "otgm_cart";

// Formatear precios como CLP
const formatoCLP = n =>
  new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(n);

// Leer carrito desde localStorage
const obtenerCarrito = () => JSON.parse(localStorage.getItem(CLAVE_CARRITO) || "[]");

// Guardar carrito en localStorage
const guardarCarrito = carrito => localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));


//  Actuzaliza el contador en el nav
function actualizarContadorNav() {
  const link = document.getElementById("cart-link");
  if (!link) return;

  const totalProductos = obtenerCarrito().reduce((acc, p) => acc + p.cantidad, 0);
  link.innerHTML = `<i class="bi bi-cart"></i> Carrito (${totalProductos})`;
}


// Agrega producto
function agregarAlCarrito({ nombre, precio, imagen, cantidad = 1 }) {
  let carrito = obtenerCarrito();
  const i = carrito.findIndex(p => p.nombre === nombre);

  if (i >= 0) {
    carrito[i].cantidad += cantidad;
  } else {
    carrito.push({ nombre, precio: Number(precio), imagen, cantidad });
  }

  guardarCarrito(carrito);
  actualizarContadorNav();
}


// cambiar camtidad
function cambiarCantidad(indice, cambio) {
  let carrito = obtenerCarrito();
  if (!carrito[indice]) return;

  carrito[indice].cantidad += cambio;
  if (carrito[indice].cantidad <= 0) carrito.splice(indice, 1);

  guardarCarrito(carrito);
  mostrarCarrito();
  actualizarContadorNav();
}


// Elimina producto
function eliminarProducto(indice) {
  let carrito = obtenerCarrito();
  carrito.splice(indice, 1);
  guardarCarrito(carrito);
  mostrarCarrito();
  actualizarContadorNav();
}


// Vaciar carrito
function vaciarCarrito() {
  guardarCarrito([]);
  mostrarCarrito();
  actualizarContadorNav();
}


// Mostrar carrito
function mostrarCarrito() {
  const lista = document.getElementById("cart-items-list");
  const totalEl = document.getElementById("cart-total");

  if (!lista || !totalEl) return;

  const carrito = obtenerCarrito();
  let total = 0;

  lista.innerHTML = "";

  carrito.forEach((item, i) => {
    const subtotal = item.precio * item.cantidad;
    total += subtotal;

    // contenedor del producto
    const itemDiv = document.createElement("div");
    itemDiv.className = "d-flex align-items-center justify-content-between border rounded p-2 mb-2";

    // columna izquierda
    const izquierdaDiv = document.createElement("div");
    izquierdaDiv.className = "d-flex align-items-center";

    const img = document.createElement("img");
    img.src = item.imagen;
    img.alt = item.nombre;
    img.width = 70;
    img.height = 70;
    img.className = "object-fit-cover me-3";

    const infoDiv = document.createElement("div");
    const nombreDiv = document.createElement("div");
    nombreDiv.className = "fw-semibold";
    nombreDiv.textContent = item.nombre;

    const precioDiv = document.createElement("div");
    precioDiv.className = "text-muted small";
    precioDiv.textContent = `${formatoCLP(item.precio)} c/u`;

    infoDiv.appendChild(nombreDiv);
    infoDiv.appendChild(precioDiv);

    izquierdaDiv.appendChild(img);
    izquierdaDiv.appendChild(infoDiv);

    // columna derecha
    const derechaDiv = document.createElement("div");
    derechaDiv.className = "d-flex align-items-center gap-2";

    const btnMenos = document.createElement("button");
    btnMenos.className = "btn btn-sm btn-outline-secondary qty-minus";
    btnMenos.dataset.index = i;
    btnMenos.textContent = "-";

    const cantidadSpan = document.createElement("span");
    cantidadSpan.className = "px-2";
    cantidadSpan.textContent = item.cantidad;

    const btnMas = document.createElement("button");
    btnMas.className = "btn btn-sm btn-outline-secondary qty-plus";
    btnMas.dataset.index = i;
    btnMas.textContent = "+";

    const subtotalSpan = document.createElement("span");
    subtotalSpan.className = "ms-3 fw-semibold";
    subtotalSpan.textContent = formatoCLP(subtotal);

    const btnEliminar = document.createElement("button");
    btnEliminar.className = "btn btn-sm btn-outline-danger ms-2 remove-item";
    btnEliminar.dataset.index = i;
    btnEliminar.textContent = "X";

    derechaDiv.appendChild(btnMenos);
    derechaDiv.appendChild(cantidadSpan);
    derechaDiv.appendChild(btnMas);
    derechaDiv.appendChild(subtotalSpan);
    derechaDiv.appendChild(btnEliminar);

    itemDiv.appendChild(izquierdaDiv);
    itemDiv.appendChild(derechaDiv);

    lista.appendChild(itemDiv);
  });

  totalEl.textContent = formatoCLP(total);
}


// Eventos
document.addEventListener("DOMContentLoaded", () => {
  actualizarContadorNav();

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".add-to-cart");
    if (btn) {
      const { name, price, image } = btn.dataset;
      agregarAlCarrito({ nombre: name, precio: price, imagen: image, cantidad: 1 });
    }

    const mas = e.target.closest(".qty-plus");
    const menos = e.target.closest(".qty-minus");
    const eliminar = e.target.closest(".remove-item");
    const pagar = e.target.closest("#btn-pagar");

    if (mas) cambiarCantidad(Number(mas.dataset.index), +1);
    if (menos) cambiarCantidad(Number(menos.dataset.index), -1);
    if (eliminar) eliminarProducto(Number(eliminar.dataset.index));

    // Mensaje de pago
    if (pagar) {
      const carrito = obtenerCarrito();
      if (carrito.length === 0) {
        alert("Tu carrito está vacío. Agrega productos antes de pagar.");
      } else {
        alert("Gracias por tu compra en On The Go Music.");
        vaciarCarrito();
      }
    }
  });

  mostrarCarrito();
});

window.vaciarCarrito = vaciarCarrito;
