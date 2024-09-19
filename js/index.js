function agregarFila() {
    var table = document.getElementById("activityTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.innerHTML = '<input type="text" name="actividad[]" placeholder="Nombre de la actividad" required>';
    cell2.innerHTML = '<input type="number" name="nota[]" placeholder="Nota" min="0" max="10" required>';
  }

  // Manejar el envío del formulario (opcional: aquí podrías procesar o validar los datos)
  document.getElementById('activityForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado con éxito.');
  });