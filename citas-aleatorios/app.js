let botonElement = document.getElementById('boton');
let citaElement = document.getElementById('cita');
let autorElement = document.getElementById('autor');

function generarAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
} 

function cambiarCita() {
    let indiceAleatorio = generarAleatorio(0, citas.length);
    citaElement.textContent = `"${citas[indiceAleatorio].texto}"`; 
    autorElement.textContent = citas[indiceAleatorio].autor;  
}

let indiceAleatorio = generarAleatorio(0, citas.length);
cambiarCita();

botonElement.addEventListener('click', cambiarCita);
