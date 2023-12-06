document.getElementById('reservarEspacio_nav').addEventListener('click', function (event) {
  event.preventDefault();

  const espacios = {
    'Espacio 1': '1',
    'Espacio 2': '2',
    'Espacio 3': '3',
    'Espacio 4': '4',
    'Espacio 5': '5',
    'Espacio 6': '6',
    'Espacio 7': '7',
    'Espacio 8': '8',
  };

  Swal.fire({
    title: 'Reservar espacio',
    html: '<label>Selecciona el espacio:</label>',
    input: 'select',
    inputOptions: espacios,
    showCancelButton: true,
    confirmButtonText: 'Continuar',
    cancelButtonText: 'Cancelar',
    inputPlaceholder: 'Selecciona un espacio',
    preConfirm: (espacioSeleccionado) => {
      if (!espacioSeleccionado) {
        Swal.showValidationMessage('Debes seleccionar un espacio.');
      }
    },
  }).then((result) => {
    if (!result.isConfirmed) {
      return;
    }

    // Espacio seleccionado
    const espacio = espacios[result.value];

    Swal.fire({
      title: 'Reservar espacio',
      html: `
        <label for="horaInicio">Hora de entrada (Por favor toma encuenta un plazo minimo de 3 minutos):</label>
        <input type="time" id="horaInicio" class="swal2-input">
        <label for="horaFin">Hora de salida:</label>
        <input type="time" id="horaFin" class="swal2-input">
      `,
      showCancelButton: true,
      confirmButtonText: 'Reservar',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        const horaInicio = document.getElementById('horaInicio').value;
        const horaFin = document.getElementById('horaFin').value;

        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();

        // Crear fechas de referencia para hoy con las horas ingresadas
        const horaInicioDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(horaInicio.split(':')[0]), parseInt(horaInicio.split(':')[1]));
        const horaFinDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(horaFin.split(':')[0]), parseInt(horaFin.split(':')[1]));

        if (!horaInicio || !horaFin) {
          Swal.showValidationMessage('Debes completar ambos campos.');
        } else if (horaInicioDate < now) {
          Swal.showValidationMessage('La hora de entrada no puede ser una hora pasada.');
        } else if (horaInicioDate >= horaFinDate) {
          Swal.showValidationMessage('La hora de inicio debe ser anterior a la hora de fin.');
        } else {
          return { espacio, horaInicio, horaFin };
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const { espacio, horaInicio, horaFin } = result.value;
        Swal.fire({
          icon: 'success',
          title: 'Reserva confirmada',
          text: `Espacio ${espacio} reservado de ${horaInicio} a ${horaFin}.`,
        });
      }
    });
  });
});


//Tarifas y pago
document.addEventListener("DOMContentLoaded", function () {
const linkTarifasPagos = document.getElementById("TarifasyPagos");

  linkTarifasPagos.addEventListener("click", function (event) {
    event.preventDefault(); // Previene la acción de navegación por defecto

    Swal.fire({
      title: "Función no integrada",
      text: "Lo sentimos, la función de Tarifas y Pagos aún no está disponible.",
      icon: "info",
    });
  });
});

//Ver informes
document.addEventListener("DOMContentLoaded", function () {
  const botonesInforme = document.querySelectorAll(".boton");
  
  botonesInforme.forEach(function (boton) {
    boton.addEventListener("click", function (event) {
      event.preventDefault(); // Previene la acción de navegación por defecto
  
      Swal.fire({
        title: "Función no integrada",
        text: "Lo sentimos, la función aún no está disponible.",
        icon: "info",
      });
    });
  });
});



// Función para anular reserva
document.getElementById('anularReserva_nav').addEventListener('click', function (event) {
  event.preventDefault();

  // Supongamos que tienes un arreglo de reservas
  const reservas = [
    { id: 1, nombre: 'Reserva 1' },
    { id: 2, nombre: 'Reserva 2' },
    { id: 3, nombre: 'Reserva 3' },
    // Agrega más reservas según sea necesario
  ];

  Swal.fire({
    title: 'Anular Reserva',
    text: 'Selecciona la reserva que deseas anular:',
    input: 'select',
    inputOptions: reservas.reduce((options, reserva) => {
      options[reserva.id] = reserva.nombre;
      return options;
    }, {}),
    inputPlaceholder: 'Selecciona una reserva',
    showCancelButton: true,
    confirmButtonText: 'Sí, anular',
    cancelButtonText: 'No, cancelar',
    preConfirm: (reservaId) => {
      if (reservaId === '') {
        Swal.showValidationMessage('Debes seleccionar una reserva.');
      } else {
        return reservaId;
      }
    }
  }).then((result) => {
    if (result.isConfirmed) {
      const reservaId = result.value;
      const reserva = reservas.find((r) => r.id == reservaId);

      Swal.fire({
        icon: 'success',
        title: 'Reserva anulada',
        text: `La reserva "${reserva.nombre}" ha sido anulada con éxito.`,
      });
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Acción cancelada',
        text: 'La reserva no ha sido anulada.',
      });
    }
  });
});


  // Función para redirigir a la página de Reportes.html
function redirigirAReportes() {
    window.location.href = 'Reportes.html';
  }
  
  // Función para redirigir a la página de TarifasPagos.html
  function redirigrAUsuario() {
    window.location.href = 'Usuario.html';
  }
  
    // Función para redirigir a la página de Dashboard
    function redirigirADashboard() {
      window.location.href = 'dashboard.html';
    }
  // Asociar las funciones a los enlaces o elementos HTML correspondientes
  document.querySelector('ul li:nth-child(4) a').addEventListener('click', redirigirAReportes);
  document.querySelector('ul li:nth-child(5) a').addEventListener('click', redirigirATarifasPagos);
  