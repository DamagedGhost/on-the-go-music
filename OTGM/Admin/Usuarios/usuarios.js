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
    `;

    tbody.appendChild(fila);
  });
}