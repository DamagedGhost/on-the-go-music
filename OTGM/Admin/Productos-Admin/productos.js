// Simulación de un "dataframe" (array de objetos)
function obtenerProductos() {
    return [
        { codigo: 1, nombre: "Guitarra Eléctrica", precio: 350.00, stock: 12, stockCritico: 3, categoria: "Cuerda" },
        { codigo: 2, nombre: "Batería Acústica", precio: 800.00, stock: 5, stockCritico: 2, categoria: "Percusión" },
        { codigo: 3, nombre: "Micrófono Dinámico", precio: 120.00, stock: 20, stockCritico: 5, categoria: "Electronica" },
        { codigo: 4, nombre: "Auriculares Studio", precio: 75.00, stock: 15, stockCritico: 4, categoria: "Electronica" },
        { codigo: 5, nombre: "Teclado MIDI", precio: 210.00, stock: 8, stockCritico: 2, categoria: "Electronica" },
        { codigo: 6, nombre: "Cable XLR", precio: 15.00, stock: 50, stockCritico: 10, categoria: "Electronica" },
        { codigo: 7, nombre: "Amplificador Bajo", precio: 400.00, stock: 3, stockCritico: 1, categoria: "Electronica" },
        { codigo: 8, nombre: "Soporte Micrófono", precio: 30.00, stock: 25, stockCritico: 5, categoria: "Electronica" },
        { codigo: 9, nombre: "Pedal Efectos", precio: 95.00, stock: 10, stockCritico: 2, categoria: "Electronica" },
        { codigo: 10, nombre: "Cuerdas Guitarra", precio: 12.00, stock: 40, stockCritico: 8, categoria: "Cuerda" }
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
        <button class="btn btn-sm btn-primary" onclick="editarProducto(${item.codigo})">
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
    window.location.href = `/OTGM/Admin/Productos-Admin/editar-producto.html?id=${codigo}`;
}

