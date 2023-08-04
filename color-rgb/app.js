const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actualizarColor (rojo, verde, azul) {
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;
}

inputRojo.addEventListener('change', () => {
    rojo = inputRojo.value;
    textoRojo.innerText = rojo;
    actualizarColor(rojo, verde, azul);
})

inputVerde.addEventListener('change', () => {
    verde = inputVerde.value;
    textoVerde.innerText = verde;
    actualizarColor(rojo, verde, azul);
})

inputAzul.addEventListener('change', () => {
    azul = inputAzul.value;
    textoAzul.innerText = azul;
    actualizarColor(rojo, verde, azul);
})
