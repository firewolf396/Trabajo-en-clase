function agregarFila(nombre, nota) {
  let tabla = document.getElementById("Actividades").getElementsByTagName('tbody')[0];

   let nuevaFila = tabla.insertRow();

   let celdaBoton = nuevaFila.insertCell(0);
   let celdaValorTexto = nuevaFila.insertCell(1);
   let celdaValorNumerico = nuevaFila.insertCell(2);
 
   let botonEliminar = document.createElement("button");
   botonEliminar.textContent = "Eliminar"; // Texto del botón
   
   botonEliminar.addEventListener('click', function() {
    mostrarModalEliminar(nuevaFila); 
  });

   celdaBoton.appendChild(botonEliminar);

   celdaValorTexto.textContent = nombre;
  celdaValorNumerico.textContent = nota ;

  
  promedio_estado(nombre,nota)
}

  function promedio_estado(nombre,nota){
    let tabla = document.getElementById("Actividades").getElementsByTagName('tbody')[0];
    let filas = tabla.getElementsByTagName('tr');
    let suma = 0;
    let cantidad = 0;
    for (let i = 1; i < filas.length; i++) {
      let celdaValorNumerico = parseFloat(filas[i].cells[2].textContent);
      if (!isNaN(celdaValorNumerico)) {
        suma += celdaValorNumerico; // Sumar el valor
        cantidad++; // Contar la cantidad de valores
      }
    }
    //if(cantidad>0){
      let a = suma / cantidad;
    a = a.toFixed(2)
    let resultado_1 = document.getElementById("Promedio")
    document.getElementById("Promedio").value = a;
    resultado_1.textContent = `Promedio: ${a}`;
    let resultadopro = document.getElementById("Estado")
    document.getElementById("Estado").value = a;
    if (a < 3) {
      resultadopro.textContent = `Estado: va perdiendo`;
    } else {
      resultadopro.textContent = `Estado: va pasando`;
    }
    document.getElementById("actividad").value = "";
    document.getElementById("nota").value = "";
    }
 function guardar_valores(){
    let nombre = document.getElementById("actividad").value;
    let nota = document.getElementById("nota").value;

    // Validar 
    nota = parseFloat(nota);
  if (isNaN(nota) || nota < 0 || nota > 5) {
    alert("Por favor, ingresa una nota válida entre 0.0 y 5.0.");
    return;
  }
    agregarFila(nombre, nota);
 }
function mostrarModalEliminar(fila) {
  let modal = document.getElementById("modal");
  let btnConfirmar = document.getElementById("modalsi");
  let btnCancelar = document.getElementById("modalno");

  // Mostrar
  modal.style.display = "block";

  btnConfirmar.onclick = function() {
    fila.remove(); 
    modal.style.display = "none"; 
    promedio_estado(); 
  };

  // Cancelar y cerrar el modal
  btnCancelar.onclick = function() {
    modal.style.display = "none";
  };
}