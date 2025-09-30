//Validacion del nombre
function validarNombre() {
    let nombre = document.getElementById("nombre").value.trim();
    let error = document.getElementById("errorNombre");
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{1,100}$/;

    if (nombre === "") {
        error.textContent = "El nombre no puede estar vacío.";
        return false;
    }
    if (!regex.test(nombre)) {
        error.textContent = "Máx 100 caracteres, solo letras, espacios y acentos.";
        return false;
    }
    error.textContent = "";
    return true;
}

//Validacion del correo
function validarCorreo() {
    let correo = document.getElementById("correo").value.trim();
    let error = document.getElementById("errorCorreo");

    if (correo.length > 100) {
        error.textContent = "El correo no puede superar los 100 caracteres.";
        return false;
    }
    let regex = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
    if (!regex.test(correo)) {
        error.textContent = "Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com.";
        return false;
    }
    error.textContent = "";
    return true;
}
//Validacion de comentario
function validarComentario() {
    let comentario = document.getElementById("comentario").value.trim();
    let error = document.getElementById("errorComentario");

    if (comentario === "") {
        error.textContent = "El comentario no puede estar vacío.";
        return false;
    }
    if (comentario.length > 500) {
        error.textContent = "Máx 500 caracteres.";
        return false;
    }
    error.textContent = "";
    return true;
}
//Validacion completa del formulario
function validarFormulario() {
    let valido = true;

    if (!validarNombre()) valido = false;
    if (!validarCorreo()) valido = false;
    if (!validarComentario()) valido = false;

    if (valido) {
        alert("Formulario enviado correctamente.");
    }
    return valido;
}
