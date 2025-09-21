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

// Diccionario Región → Comunas
const comunasPorRegion = {
  Arica_Parinacota: ["Arica", "Camarones", "Putre", "General Lagos"],
  Tarapaca: ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
  Antofagasta: ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla"],
  Atacama: ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"],
  Coquimbo: ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paihuano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"],
  Valparaiso: ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo"],
  Metropolitana: ["Santiago", "Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura"],
  Libertador_Bernardo_OHiggins: ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Machalí", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla"],
  Maule: ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén"],
  Ñuble: ["Chillán", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "El Carmen", "Ninhue", "Pemuco", "Pinto", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"],
  Biobío: ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualpén", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Lebu", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel"],
  La_Araucanía: ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén"],
  Los_Ríos: ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "Futrono", "La Unión", "Lago Ranco", "Río Bueno"],
  Los_Lagos: ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro"]
};

// Función para cargar comunas dinámicamente
function cargarComunas() {
  const region = document.getElementById('regionSelect').value;
  const comunaSelect = document.getElementById('comunaSelect');
  comunaSelect.innerHTML = '<option value="">Seleccione comuna</option>';

  if (region && comunasPorRegion[region]) {
    comunasPorRegion[region].forEach(c => {
      const opt = document.createElement('option');
      opt.value = c; // valor igual al nombre
      opt.textContent = c;
      comunaSelect.appendChild(opt);
    });
  }
}


/* Validar formulario:

Debe tener: 

-RUT:
  Obligatorio
  Validar rut si es correcto
  sin puntos ni guion: 19011022K
  Minimo 7 caracteres maximo 9

-Nombre:
  Obligatorio
  Maximo 50 caracteres

-Apellidos:
  Obligatorio
  Maximo 100 caracteres

-Correo:
  Obligatorio
  Maximo 100 caracteres
  validar: @duoc.cl | @profesor.duoc.cl | @gmail.com

-Fecha de nacimiento:
  Opcional

-Tipo de usuario (admin, vendedor, cliente):

-Region y comuna:
  Mostrar regiones en arreglo JS

-Direccion:
  Obligatorio
  Maximo 300 caracteres

*/

function validarRUT() {
  const rutInput = document.getElementById('rutInput');
  const rutFeedback = document.getElementById('rutFeedback');

  const raw = rutInput.value || '';
  const rut = raw.trim().toUpperCase();
  const normalized = rut.replace(/\./g, '').replace(/-/g, '');

  if (normalized.length === 0) {
    mostrarError("RUT obligatorio", rutInput, rutFeedback);
    return false;
  }

  if (normalized.length < 7 || normalized.length > 9) {
    mostrarError("RUT debe tener entre 7 y 9 caracteres", rutInput, rutFeedback);
    return false;
  }

  const cuerpo = normalized.slice(0, -1);
  const dv = normalized.slice(-1);

  if (!/^\d+$/.test(cuerpo)) {
    mostrarError("El RUT solo debe contener números en el cuerpo", rutInput, rutFeedback);
    return false;
  }

  // Cálculo módulo 11
  let suma = 0, multiplo = 2;
  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += Number(cuerpo.charAt(i)) * multiplo;
    multiplo = multiplo < 7 ? multiplo + 1 : 2;
  }
  const restoCalc = 11 - (suma % 11);
  const dvEsperado = restoCalc === 11 ? '0' : restoCalc === 10 ? 'K' : String(restoCalc);

  if (dv === dvEsperado) {
    mostrarExito("RUT válido", rutInput, rutFeedback);
    return true;
  } else {
    mostrarError("Dígito verificador incorrecto", rutInput, rutFeedback);
    return false;
  }
}

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

// Nombre
function validarNombre() {
  const input = document.getElementById('nameInput');
  const feedback = document.getElementById('nameFeedback');
  const valor = input.value.trim();

  if (valor.length === 0) {
    mostrarError("Nombre obligatorio", input, feedback);
    return false;
  }
  if (valor.length > 50) {
    mostrarError("Máximo 50 caracteres", input, feedback);
    return false;
  }
  mostrarExito("Nombre válido", input, feedback);
  return true;
}

// Apellido
function validarApellido() {
  const input = document.getElementById('surnameInput');
  const feedback = document.getElementById('surnameFeedback');
  const valor = input.value.trim();

  if (valor.length === 0) {
    mostrarError("Apellido obligatorio", input, feedback);
    return false;
  }
  if (valor.length > 100) {
    mostrarError("Máximo 100 caracteres", input, feedback);
    return false;
  }
  mostrarExito("Apellido válido", input, feedback);
  return true;
}

//! Correo - no toma formato
function validarCorreo() {
  const input = document.getElementById('emailInput');
  const feedback = document.getElementById('emailFeedback');
  const valor = input.value.trim();
  const regex = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;

  if (valor.length === 0) {
    mostrarError("Correo obligatorio", input, feedback);
    return false;
  }
  if (valor.length > 100) {
    mostrarError("Máximo 100 caracteres", input, feedback);
    return false;
  }
  if (!regex.test(valor)) {
    mostrarError("Debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com", input, feedback);
    return false;
  }
  mostrarExito("Correo válido", input, feedback);
  return true;
}

// Contraseña
function validarContrasena() {
  const input = document.getElementById('passwordInput');
  const feedback = document.getElementById('passwordFeedback');
  const valor = input.value;

  if (valor.length === 0) {
    mostrarError("Contraseña obligatoria", input, feedback);
    return false;
  }
  if (valor.length < 8) {
    mostrarError("Debe tener al menos 8 caracteres", input, feedback);
    return false;
  }
  mostrarExito("Contraseña válida", input, feedback);
  return true;
}

// Fecha de nacimiento (opcional)
function validarFechaNacimiento() {
  const input = document.getElementById('birthdateInput');
  const feedback = document.getElementById('birthdateFeedback');
  const valor = input.value;

  if (!valor) {
    // Si no se ingresó nada, es válido
    feedback.textContent = "";
    input.classList.remove('is-invalid', 'is-valid');
    return true;
  }

  const fechaDate = new Date(valor);
  const hoy = new Date();

  if (fechaDate > hoy) {
    mostrarError("La fecha no puede ser futura", input, feedback);
    return false;
  }

  mostrarExito("Fecha válida", input, feedback);
  return true;
}

// Tipo de usuario
function validarTipoUsuario() {
  const input = document.getElementById('userTypeSelect');
  const feedback = document.getElementById('userTypeFeedback');
  const valor = input.value;

  if (!valor) {
    mostrarError("Tipo de usuario obligatorio", input, feedback);
    return false;
  }
  mostrarExito("Tipo de usuario válido", input, feedback);
  return true;
}

// Región
function validarRegion() {
  const input = document.getElementById('regionSelect');
  const feedback = document.getElementById('regionFeedback');
  const valor = input.value;

  if (!valor) {
    mostrarError("Región obligatoria", input, feedback);
    return false;
  }
  mostrarExito("Región válida", input, feedback);
  return true;
}

// Comuna
function validarComuna() {
  const input = document.getElementById('comunaSelect');
  const feedback = document.getElementById('comunaFeedback');
  const valor = input.value;

  if (!valor) {
    mostrarError("Comuna obligatoria", input, feedback);
    return false;
  }
  mostrarExito("Comuna válida", input, feedback);
  return true;
}

// Dirección
function validarDireccion() {
  const input = document.getElementById('directionInput');
  const feedback = document.getElementById('directionFeedback');
  const valor = input.value.trim();

  if (valor.length === 0) {
    mostrarError("Dirección obligatoria", input, feedback);
    return false;
  }
  if (valor.length > 300) {
    mostrarError("Máximo 300 caracteres", input, feedback);
    return false;
  }
  mostrarExito("Dirección válida", input, feedback);
  return true;
}

// Validación de todo el formulario
function validarFormulario(event) {
  event.preventDefault();

  const esValido =
    validarNombre() &&
    validarApellido() &&
    validarCorreo() &&
    validarContrasena() &&
    validarFechaNacimiento() &&
    validarTipoUsuario() &&
    validarRegion() &&
    validarComuna() &&
    validarDireccion();

  if (esValido) {
    alert("Formulario válido ✅");
  } else {
    alert("Formulario inválido ❌");
  }
}

function scriptFunciona() {
  alert("Funciona");
}

function limpiarFormulario() {
  document.getElementById('registrationForm').reset();
  const feedbacks = document.querySelectorAll('.invalid-feedback, .valid-feedback');
  feedbacks.forEach(fb => fb.style.display = 'none');
  const inputs = document.querySelectorAll('.is-invalid, .is-valid');
  inputs.forEach(input => input.classList.remove('is-invalid', 'is-valid'));
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