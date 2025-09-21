
// funcion para verificar credenciales y redirigir al admin
// obviamente esto es solo un ejemplo, en un caso real se deberia hacer una verificacion mas segura, con credenciales almacenadas en un servidor encriptadas
function verificarYRedirigirAdmin() {

    // extraer valores de los campos de entrada
    let email = document.getElementById("email").value;
    let passwrd = document.getElementById("password").value;
    
    // verificar si las credenciales coinciden con las del admin
    if (email === "admin@admin.com" && passwrd === "admin") {

        // redirigir al home del admin
        window.location.href = "/OTGM/Admin/home.html";
    } else {
        
        // mostrar alerta de credenciales incorrectas
        alert("Credenciales incorrectas");
    }
}
