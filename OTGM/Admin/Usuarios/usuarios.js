// Simulación de un "dataframe" (array de objetos)
function obtenerUsuarios() {
return [
    { id: 1, nombre: "Juan Pérez", area: "Ventas", correo: "juan.perez@example.com", estado: "Activo" },
    { id: 2, nombre: "María Gómez", area: "Marketing", correo: "maria.gomez@example.com", estado: "Inactivo" },
    { id: 3, nombre: "Pedro Fernández", area: "Desarrollo", correo: "pedro.fernandez@example.com", estado: "Activo" },
    { id: 4, nombre: "Ana López", area: "Soporte", correo: "ana.lopez@example.com", estado: "Activo" },
    { id: 5, nombre: "Carlos Martínez", area: "Recursos Humanos", correo: "carlos.martinez@example.com", estado: "Inactivo" },
    { id: 6, nombre: "Lucía Rodríguez", area: "Finanzas", correo: "lucia.rodriguez@example.com", estado: "Activo" },
    { id: 7, nombre: "Miguel Sánchez", area: "Diseño", correo: "miguel.sanchez@example.com", estado: "Activo" },
    { id: 8, nombre: "Sofía Torres", area: "Operaciones", correo: "sofia.torres@example.com", estado: "Activo" },
    { id: 9, nombre: "Fernando Ruiz", categoria: "Calidad", correo: "fernando.ruiz@example.com", estado: "Inactivo" },
    { id: 10, nombre: "Isabel Navarro", categoria: "Legal", correo: "isabel.navarro@example.com", estado: "Activo" },
    { id: 11, nombre: "Diego Morales", area: "Administración", correo: "diego.morales@example.com", estado: "Activo" },
    { id: 12, nombre: "Mariana Castillo", area: "Logística", correo: "mariana.castillo@example.com", estado: "Inactivo" },
    { id: 13, nombre: "Raúl Vega", area: "Investigación", correo: "raul.vega@example.com", estado: "Activo" },
    { id: 14, nombre: "Carla Medina", categoria: "Seguridad", correo: "carla.medina@example.com", estado: "Activo" },
    { id: 15, nombre: "Javier Ortiz", area: "Atención al Cliente", correo: "javier.ortiz@example.com", estado: "Activo" },
];
}

// Función genérica para cargar datos en una tabla HTML
function cargarTabla(tablaId, data) {
  const tbody = document.querySelector(`#${tablaId} tbody`);
  tbody.innerHTML = ""; // limpiar contenido previo

  data.forEach(item => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${item.id}</td>
      <td>${item.nombre}</td>
      <td>${item.area ?? item.categoria ?? ""}</td>
      <td>${item.correo ?? ""}</td>
      <td>${item.estado ?? ""}</td>
      <td>
        <button class="btn btn-sm btn-primary" onclick="editarUsuario(${item.id})">
            Editar
        </button>
      </td>
    `;

    tbody.appendChild(fila);
  });
}

function editarUsuario(id) {
  const usuario = obtenerUsuarios().find(u => u.id === id);
    alert("Editar usuario con ID: " + id);
    // Aquí puedes redirigir a una página de edición o abrir un modal
    window.location.href = `/OTGM/Admin/Usuarios/editar-usuario.html?id=${id}`;
}

//! ARREGLAR ESTO
// // editar-usuario.js

// // Función auxiliar para obtener el ID de la URL
// function getUserIdFromUrl() {
//     const params = new URLSearchParams(window.location.search);
//     return params.get("id");
// }

// // Cargar datos al formulario
// function cargarDatosUsuario() {
//     const userId = getUserIdFromUrl();
//     if (!userId) {
//         alert("ID de usuario no especificado.");
//         return;
//     }

//     // Buscar usuario
//     const usuario = obtenerUsuarios().find(u => u.id == userId);
//     if (!usuario) {
//         alert("Usuario no encontrado.");
//         return;
//     }

//     // Rellenar campos del formulario
//     document.getElementById("nombre").value = usuario.nombre || "";
//     document.getElementById("apellido").value = usuario.apellido || "";
//     document.getElementById("correo").value = usuario.correo || "";
//     document.getElementById("rol").value = usuario.rol || "";
//     document.getElementById("estado").value = usuario.estado || "";
// }

// // Ejecutar cuando cargue la página
// window.addEventListener("DOMContentLoaded", cargarDatosUsuario);

// // Manejo de envío del formulario
// document.getElementById("editUserForm").addEventListener("submit", function (e) {
//     e.preventDefault();

//     // Aquí recoges los valores del formulario
//     const datosActualizados = {
//         nombre: document.getElementById("nombre").value,
//         apellido: document.getElementById("apellido").value,
//         correo: document.getElementById("correo").value,
//         rol: document.getElementById("rol").value,
//         estado: document.getElementById("estado").value,
//     };

//     console.log("Datos guardados:", datosActualizados);

//     // Aquí puedes:
//     // - Enviar datos a tu API con fetch()
//     // - Guardar en localStorage
//     // - Redirigir de vuelta a la lista de usuarios
//     alert("Cambios guardados con éxito ✅");
// });