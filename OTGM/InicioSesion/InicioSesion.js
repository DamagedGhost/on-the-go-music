// script.js

function obtenerUsuarios() {
  return JSON.parse(localStorage.getItem("usuarios")) || [];
}

function verificarYRedirigir(event) {
  if (event && event.preventDefault) event.preventDefault();

  const emailEl = document.getElementById("email");
  const pwdEl = document.getElementById("password");

  if (!emailEl || !pwdEl) {
    alert("Faltan campos de email o password en el formulario.");
    return;
  }

  const correo = emailEl.value.trim().toLowerCase();
  const password = pwdEl.value;

  const usuarios = obtenerUsuarios();
  const usuario = usuarios.find(
    u => u.correo && u.correo.toLowerCase() === correo && u.password === password
  );

  if (usuario) {
    // Guardar sesión
    localStorage.setItem("usuarioActivo", JSON.stringify(usuario));

    if (usuario.rol === "admin") {
      window.location.href = "/OTGM/Admin/home.html";
    } else if (usuario.rol === "user" || usuario.rol === "client") {
      window.location.href = "/OTGM/main-page.html";
    } else {
      alert("Rol no reconocido");
    }
  } else {
    alert("Credenciales incorrectas");
  }
}

// Si tu formulario tiene id="loginForm", engancha el submit
const form = document.getElementById("loginForm");
if (form) form.addEventListener("submit", verificarYRedirigir);