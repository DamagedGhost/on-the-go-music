document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    let valido = true;

    // Nombre completo
    const nombre = document.getElementById("nombre");
    if (nombre.value.trim() === "") {
      alert("Por favor ingrese su nombre completo.");
      nombre.focus();
      return;
    }

    // Correo
    const correo = document.getElementById("correo");
    const correo2 = document.getElementById("correo2");

    if (!regexCorreo.test(correo.value)) {
      alert("Ingrese un correo electrónico valido.");
      correo.focus();
      return;
    }
    if (correo.value !== correo2.value) {
      alert("Los correos no coinciden.");
      correo2.focus();
      return;
    }

    // Contraseña
    const pass = document.getElementById("pass");
    const pass2 = document.getElementById("pass2");
    if (pass.value.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      pass.focus();
      return;
    }
    if (pass.value !== pass2.value) {
      alert("Las contraseñas no coinciden.");
      pass2.focus();
      return;
    }

    // Teléfono
    const telefono = document.getElementById("telefono");
    const regexTel = /^[0-9]{9}$/; // Chile, 9 dígitos
    if (telefono.value.trim() !== "" && !regexTel.test(telefono.value)) {
      alert("Ingrese un telefono valido de 9 digitos.");
      telefono.focus();
      return;
    }

    // Región
    const region = document.getElementById("region");
    if (region.value === "-- Seleccione la region --" || region.value === "") {
      alert("Seleccione una region.");
      region.focus();
      return;
    }

    // Comuna
    const comuna = document.getElementById("comuna");
    if (comuna.value === "-- Seleccione la comuna --" || comuna.value === "") {
      alert("Seleccione una comuna.");
      comuna.focus();
      return;
    }

    alert("Registro exitoso!");
    form.submit();
  });
});
