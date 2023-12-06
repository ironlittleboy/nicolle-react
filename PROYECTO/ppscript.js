document.getElementById("graduates-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var graduationYear = document.getElementById("graduation-year").value;
    
    alert("Hola, " + name + "! Has graduado en el año " + graduationYear + ". Bienvenido al Sistema de Seguimiento de Graduados ULEAM.");
});
