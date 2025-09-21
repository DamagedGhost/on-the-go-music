// Simulación de un "dataframe" (array de objetos)
function obtenerProductos() {
    return [
        { codigo: "OM1", nombre: "Guitarra Eléctrica", descripcion: "Guitarra eléctrica de alta calidad", precio: 350.00, stock: 12, stockCritico: 3, categoria: "Cuerda" },
        { codigo: "OM2", nombre: "Batería Acústica", descripcion: "Batería acústica profesional", precio: 800.00, stock: 5, stockCritico: 2, categoria: "Percusión" },
        { codigo: "OM3", nombre: "Micrófono Dinámico", descripcion: "Micrófono dinámico para voces", precio: 120.00, stock: 20, stockCritico: 5, categoria: "Electronica" },
        { codigo: "OM4", nombre: "Auriculares Studio", descripcion: "Auriculares de estudio", precio: 75.00, stock: 15, stockCritico: 4, categoria: "Electronica" },
        { codigo: "OM5", nombre: "Teclado MIDI", descripcion: "Teclado MIDI para producción musical", precio: 210.00, stock: 8, stockCritico: 2, categoria: "Electronica" },
        { codigo: "OM6", nombre: "Cable XLR", descripcion: "Cable XLR de alta calidad", precio: 15.00, stock: 50, stockCritico: 10, categoria: "Electronica" },
        { codigo: "OM7", nombre: "Amplificador Bajo", descripcion: "Amplificador de bajo", precio: 400.00, stock: 3, stockCritico: 1, categoria: "Electronica" },
        { codigo: "OM8", nombre: "Soporte Micrófono", descripcion: "Soporte para micrófono", precio: 30.00, stock: 25, stockCritico: 5, categoria: "Electronica" },
        { codigo: "OM9", nombre: "Pedal Efectos", descripcion: "Pedal de efectos", precio: 95.00, stock: 10, stockCritico: 2, categoria: "Electronica" },
        { codigo: "OM10", nombre: "Cuerdas Guitarra", descripcion: "Cuerdas para guitarra", precio: 12.00, stock: 40, stockCritico: 8, categoria: "Cuerda" }
    ];
}

// Función genérica para cargar datos en una tabla HTML
function cargarTabla(tablaId, data) {
  const tbody = document.querySelector(`#${tablaId} tbody`);
  tbody.innerHTML = ""; // limpiar contenido previo

  data.forEach(item => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${item.codigo}</td>
      <td>${item.nombre}</td>
      <td>${item.precio}</td>
      <td>${item.stock}</td>
      <td>${item.stockCritico}</td>
      <td>${item.categoria}</td>
      <td>
        <button class="btn btn-sm btn-primary" onclick="editarProducto('${item.codigo}')">
          Editar
        </button>
      </td>
    `;

    tbody.appendChild(fila);
  });
}


function editarProducto(codigo) {
  const producto = obtenerProductos().find(p => p.codigo === codigo);
    alert("Editar producto con código: " + codigo + "\nNombre: " + producto.nombre);
    // Aquí puedes redirigir a una página de edición o abrir un modal
    window.location.href = `/OTGM/Admin/Productos-Admin/editar-producto.html?cod=${codigo}`;
}


//* -------------------------------- Validaciones Formulario --------------------------------- //

/*
❖ Vista del administrador

Codigo producto:
  obligatorio
  Texto
  minimo 3 caracteres
  max, no tiene limite

Nombre producto:
  obligatorio
  maximo 100 caracteres

Descripcion producto:
  Opcional
  maximo 500 caracteres

Precio producto:
  obligatorio
  minimo 0 (se considera 0 como gratis - free)
  maximo no tiene limite
  puede ser decimal

Stock producto:
  obligatorio
  minimo 0
  maximo no tiene limite
  solo numeros enteros

Stock critico producto (mostrar alerta si el stock es menor o igual al stock critico):
  Opcional
  minimo 0
  Solo numeros enteros

Categoria producto:
  obligatorio
  Lista desplegable (Cuerda, Percusion, Viento, Electronica, Accesorios, Otros)

Imagen producto:
  Opcional

*/

function mostrarError(msg, rutInput, rutFeedback) {
  rutFeedback.textContent = msg;
  rutFeedback.style.color = '#dc3545';
  rutFeedback.style.display = 'block';
  rutInput.classList.add('is-invalid');
  rutInput.classList.remove('is-valid');
}

function mostrarExito(msg, rutInput, rutFeedback) {
  rutFeedback.textContent = msg;
  rutFeedback.style.color = '#198754';
  rutFeedback.style.display = 'block';
  rutInput.classList.remove('is-invalid');
  rutInput.classList.add('is-valid');
}


// Codigo producto:
//   obligatorio
//   Texto
//   minimo 3 caracteres
//   max, no tiene limite
function validarCodigoProducto() {
  const codigoInput = document.getElementById('codIntput');
  const codigoFeedback = document.getElementById('codIntputFeedback');
  const codigo = codigoInput.value.trim();

  if (codigo.length === 0) {
    mostrarError('El código del producto es obligatorio.', codigoInput, codigoFeedback);
    return false;
  }
  if (codigo.length < 3) {
    mostrarError('El código del producto debe tener al menos 3 caracteres.', codigoInput, codigoFeedback);
    return false;
  }
  mostrarExito('Código del producto válido.', codigoInput, codigoFeedback);
  return true;
}


// Nombre producto:
//   obligatorio
//   maximo 100 caracteres
function validarNombreProducto() {
  const nombreInput = document.getElementById('nombreProductoInput');
  const nombreFeedback = document.getElementById('nombreProductoFeedback');
  const nombre = nombreInput.value.trim();

  if (nombre.length === 0) {
    mostrarError('El nombre del producto es obligatorio.', nombreInput, nombreFeedback);
    return false;
  }

  if (nombre.length > 100) {
    mostrarError('El nombre del producto no puede exceder los 100 caracteres.', nombreInput, nombreFeedback);
    return false;
  }

  mostrarExito('Nombre del producto válido.', nombreInput, nombreFeedback);
  return true;
}


// Descripcion producto:
//   Opcional
//   maximo 500 caracteres
function validarDescripcionProducto() {
  const descripcionInput = document.getElementById('descripcionInput');
  const descripcionFeedback = document.getElementById('descripcionFeedback');
  const descripcion = descripcionInput.value.trim();

  if (descripcion.length > 500) {
    mostrarError('La descripción del producto no puede exceder los 500 caracteres.', descripcionInput, descripcionFeedback);
    return false;
  }

  mostrarExito('Descripción del producto válida.', descripcionInput, descripcionFeedback);
  return true;
}


// Precio producto:
//   obligatorio
//   minimo 0 (se considera 0 como gratis - free)
//   maximo no tiene limite
//   puede ser decimal
function validarPrecioProducto() {
  const precioInput = document.getElementById('precioInput');
  const precioFeedback = document.getElementById('precioFeedback');
  const precio = parseFloat(precioInput.value.trim());

  if (isNaN(precio)) {
    mostrarError('El precio del producto es obligatorio y debe ser un número.', precioInput, precioFeedback);
    return false;
  }

  if (precio < 0) {
    mostrarError('El precio del producto no puede ser negativo.', precioInput, precioFeedback);
    return false;
  }

  mostrarExito('Precio del producto válido.', precioInput, precioFeedback);
  return true;
}

// Stock producto:
//   obligatorio
//   minimo 0
//   maximo no tiene limite
//   solo numeros enteros
function validarStockProducto() {
  const stockInput = document.getElementById('stockInput');
  const stockFeedback = document.getElementById('stockFeedback');
  const stock = parseInt(stockInput.value.trim(), 10);

  if (isNaN(stock)) {
    mostrarError('El stock del producto es obligatorio y debe ser un número entero.', stockInput, stockFeedback);
    return false;
  }

  if (stock < 0) {
    mostrarError('El stock del producto no puede ser negativo.', stockInput, stockFeedback);
    return false;
  }

  mostrarExito('Stock del producto válido.', stockInput, stockFeedback);
  return true;
}


// Stock critico producto (mostrar alerta si el stock es menor o igual al stock critico):
//   Opcional
//   minimo 0
//   Solo numeros enteros
function validarStockCriticoProducto() {
  const stockCriticoInput = document.getElementById('stockCriticoInput');
  const stockCriticoFeedback = document.getElementById('stockCriticoFeedback');
  const stockCritico = parseInt(stockCriticoInput.value.trim(), 10);
  const stockInput = document.getElementById('stockInput');
  const stock = parseInt(stockInput.value.trim(), 10);
  if (isNaN(stockCritico)) {
    mostrarExito('El stock crítico es opcional.', stockCriticoInput, stockCriticoFeedback);
    return true;
  }
  if (stockCritico < 0) {
    mostrarError('El stock crítico no puede ser negativo.', stockCriticoInput, stockCriticoFeedback);
    return false;
  }
  if (!isNaN(stock) && stock <= stockCritico) {
    mostrarError('Alerta: El stock es menor o igual al stock crítico.', stockCriticoInput, stockCriticoFeedback);
    return false;
  }
}

// Categoria producto:
//   obligatorio
//   Lista desplegable (Cuerda, Percusion, Viento, Electronica, Accesorios, Otros)
function validarCategoriaProducto() {
  const categoriaInput = document.getElementById('regionSelect');
  const categoriaFeedback = document.getElementById('categoriaFeedback');
  const categoria = categoriaInput.value;

  if (categoria === '') {
    mostrarError('La categoría del producto es obligatoria.', categoriaInput, categoriaFeedback);
    return false;
  }

  mostrarExito('Categoría del producto válida.', categoriaInput, categoriaFeedback);
  return true;
}

// Imagen producto:
//   Opcional
function validarImagenProducto() {
  const imagenInput = document.getElementById('imagenInput');
  const imagenFeedback = document.getElementById('imagenFeedback');
  const imagen = imagenInput.value.trim();
  if (imagen.length === 0) {
    mostrarExito('La imagen del producto es opcional.', imagenInput, imagenFeedback);
    return true;
  }

  mostrarExito('Imagen del producto válida.', imagenInput, imagenFeedback);
  return true;
}

// Validar todo el formulario antes de enviar
function validarFormulario(event) {
  event.preventDefault(); // Prevenir el envío del formulario para validación
  const esCodigoValido = validarCodigoProducto();
  const esNombreValido = validarNombreProducto();
  const esDescripcionValida = validarDescripcionProducto();
  const esPrecioValido = validarPrecioProducto();
  const esStockValido = validarStockProducto();
  const esStockCriticoValido = validarStockCriticoProducto();
  const esCategoriaValida = validarCategoriaProducto();
  const esImagenValida = validarImagenProducto();
  if (esCodigoValido && esNombreValido && esDescripcionValida && esPrecioValido && esStockValido && esStockCriticoValido && esCategoriaValida && esImagenValida) {
    alert('Formulario válido. Enviando datos...');
    // Aquí puedes proceder a enviar el formulario
    document.getElementById('productoForm').submit();
  } else {
    alert('Por favor, corrige los errores en el formulario antes de enviarlo.');
  }
}
//* -------------------------------- Fin Validaciones Formulario ------------------------------ //

function getProductoIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("cod");
}

function cargarDatosProducto() {
  const productoId = getProductoIdFromUrl();
  if (!productoId) {
    alert("ID de producto no especificado.");
    return;
  }

  const producto = obtenerProductos().find(p => p.codigo == productoId);
  if (!producto) {
    alert("Producto no encontrado.");
    return;
  }

  // Rellenar con los IDs correctos del formulario
  document.getElementById("codIntput").value = producto.codigo || "";
  document.getElementById("nombreProductoInput").value = producto.nombre || "";
  document.getElementById("descripcionInput").value = producto.descripcion || "";
  document.getElementById("precioInput").value = producto.precio || "";
  document.getElementById("stockInput").value = producto.stock || "";
  document.getElementById("stockCriticoInput").value = producto.stockCritico || "";
  document.getElementById("regionSelect").value = producto.categoria || "";
}

// Ejecutar al cargar
window.addEventListener("DOMContentLoaded", cargarDatosProducto);

document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const datosActualizados = {
    codigo: document.getElementById("codIntput").value,
    nombre: document.getElementById("nombreProductoInput").value,
    descripcion: document.getElementById("descripcionInput").value,
    precio: parseFloat(document.getElementById("precioInput").value),
    stock: parseInt(document.getElementById("stockInput").value, 10),
    stockCritico: parseInt(document.getElementById("stockCriticoInput").value, 10),
    categoria: document.getElementById("regionSelect").value,
    // Aquí podrías agregar la lógica para manejar la imagen si es necesario
  };

  console.log("Datos actualizados:", datosActualizados);
  alert("Cambios guardados con éxito ✅");
});

function scriptFunciona() {
  alert("El script funciona correctamente.");
}