function validarBusqueda() {
    var registro = document.getElementById("registro").value;

    if (registro === "") {
        alert("Por favor ingrese el nombre del graduado para realizar la busqueda");
    } else {
        // Realiza la búsqueda del graduado usando el número de registro

        // Muestra un mensaje de alerta temporalmente para demostrar la validación.
        alert("Busqueda exitosa para el numero de registro: " + registro);
        window.location = "informegraduado.html";
    }
}

function regreso() {
    window.location = "inicio.html";
}
