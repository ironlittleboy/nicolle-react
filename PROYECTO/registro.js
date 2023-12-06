function validar() {
    var nombres = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellido").value;
    var cedula = document.getElementById("cedula").value;
    var direccion = document.getElementById("direccion").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var carrera = document.getElementById("carrera").value;
    var anioGraduacion = document.getElementById("anio_graduacion").value;
    var trabajandoSI = document.getElementById("SI").checked;
    var trabajandoNO = document.getElementById("NO").checked;

    if (nombres.trim() === "") {
        alert("Por favor ingrese su nombre.");
        return;
    }

    if (apellidos.trim() === "") {
        alert("Por favor ingrese sus apellidos.");
        return;
    }

    if (cedula.trim() === "") {
        alert("Por favor ingrese su número de cédula.");
        return;
    }

    if (isNaN(cedula) || cedula.length !== 10) {
        alert("Por favor ingrese un número de cédula válido de 10 dígitos.");
        return;
    }

    if (direccion.trim() === "") {
        alert("Por favor ingrese su dirección.");
        return;
    }

    if (telefono.trim() === "" || isNaN(telefono)) {
        alert("Por favor ingrese un número de teléfono válido.");
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor ingrese un correo electrónico válido.");
        return;
    }

    if (carrera.trim() === "") {
        alert("Por favor ingrese su carrera.");
        return;
    }

    if (anioGraduacion.trim() === "" || isNaN(anioGraduacion)) {
        alert("Por favor ingrese un año de graduación válido.");
        return;
    }

    if (!trabajandoSI && !trabajandoNO) {
        alert("Por favor seleccione si está trabajando.");
        return;
    }

   
    alert("Graduado registrado correctamente");
}

function regreso() {
    window.location = "inicio.html";
}
