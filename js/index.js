function agregarFila(nombre, nota) {
  let tabla = document.getElementById("Actividades").getElementsByTagName('tbody')[0];

   let nuevaFila = tabla.insertRow();

   let celdaBoton = nuevaFila.insertCell(0);
   let celdaValorTexto = nuevaFila.insertCell(1);
   let celdaValorNumerico = nuevaFila.insertCell(2);
 
   let botonEliminar = document.createElement("button");
   botonEliminar.textContent = "Eliminar"; // Texto del botón
 
   // Agrega un evento al botón para que elimine la fila cuando se presione
   
   botonEliminar.addEventListener('click', function() {
    let confirmar = confirm("¿Estás seguro de que deseas eliminar esta fila?");
    if (confirmar) {
      // Obtenemos el índice de la fila actual
      let indiceFila = nuevaFila.rowIndex;
      // Eliminamos la fila usando su índice
      tabla.deleteRow(indiceFila - 1); // Restamos 1 porque rowIndex incluye el encabezado
      promedio_estado();
    }
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
    agregarFila(nombre, nota);
    

    
 }