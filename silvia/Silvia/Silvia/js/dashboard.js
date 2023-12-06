//Funcion limitadora Li y main (Error)

document.addEventListener("DOMContentLoaded", function() {
  const itemsReserva = document.querySelectorAll('.reservas_cumplidas');
  const itemsLineaHorizontal = document.querySelectorAll('.contenedor_num .linea-horizontal-bottom');

  itemsReserva.forEach(item => {
    item.addEventListener('click', function() {
      Swal.fire({
        icon: 'error',
        title: 'Espacio ya reservado',
        text: 'Este espacio ya ha sido reservado por otro usuario.',
      });
    });
  });

  itemsLineaHorizontal.forEach(item => {
    item.addEventListener('click', function() {
      Swal.fire({
        icon: 'error',
        title: 'Espacio ya reservado',
        text: 'Este espacio ya ha sido reservado por otro usuario.',
      });
    });
  });
});


//funcion guardar
document.addEventListener("DOMContentLoaded", function () {
  const contenedoresSucces = document.querySelectorAll('.linea-horizontal-bottom-succes');
  const Libres = document.getElementById('contenedorlibre6')

  contenedoresSucces.forEach((contenedor, index) => {
    contenedor.addEventListener('click', async function () {
      let formValues = null;
      let validHours = false;

      while (!validHours) {
        const horasResult = await Swal.fire({
          title: 'Selecciona las horas de entrada y salida',
          showCancelButton: true,
          confirmButtonText: 'Reservar',
          cancelButtonText: 'Cancelar',
          showLoaderOnConfirm: true,
          html:
            '<div>Formulario de Reserva</div>' +
            '<input type="time" id="horaInicio" class="swal2-input" placeholder="Hora de inicio">' +
            '<input type="time" id="horaFin" class="swal2-input" placeholder="Hora de fin">',
          focusConfirm: false,
          preConfirm: () => {
            const horaInicio = Swal.getPopup().querySelector('#horaInicio').value;
            if (!horaInicio) {
              Swal.showValidationMessage('Completa todos los campos.');
              return;
            }
            const horaFin = Swal.getPopup().querySelector('#horaFin').value;
            if (!horaFin) {
              Swal.showValidationMessage('Completa todos los campos.');
              return;
            }
            const now = new Date();
            const currentHour = now.getHours();
            const currentMinute = now.getMinutes();
            const horaInicioDate = new Date('1970-01-01T' + horaInicio);
            const horaFinDate = new Date('1970-01-01T' + horaFin);

            if (horaInicio >= horaFin) {
              Swal.showValidationMessage('La hora de inicio debe ser anterior a la hora de fin.');
            } else if (horaInicioDate.getHours() < currentHour || (horaInicioDate.getHours() === currentHour && horaInicioDate.getMinutes() <= currentMinute)) {
              Swal.showValidationMessage('La hora de inicio no puede ser una hora pasada.');
            } else {
              validHours = true;
              return { horaInicio: horaInicio, horaFin: horaFin };
            }
          }
        });

        if (horasResult.isConfirmed) {
          formValues = horasResult.value;

          // Cambia la clase a linea-horizontal-bottom en el elemento libre correspondiente
          Libres.classList.remove('linea-horizontal-bottom-succes');
          Libres.classList.add('linea-horizontal-bottom');
        } else {
          // El usuario canceló la reserva
          break;
        }
      }

      if (formValues) {
        const { horaInicio, horaFin } = formValues;
        Swal.fire({
          icon: 'success',
          title: 'Reserva confirmada',
          text: `Espacio reservado de ${horaInicio} a ${horaFin}.`,
        });
      }
    });
  });
});
