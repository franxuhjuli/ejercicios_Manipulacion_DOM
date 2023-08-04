const botonInicio = document.getElementById('boton-inicio');
const botonReset = document.getElementById('boton-reset');


let [horas, minutos, segundos] = [0, 0, 0];

let intervaloDeTiempo
let estadoCronometro = 'pausado'


function actualizarCronometro() {
    segundos++;
    if (segundos / 60 === 1) {
        segundos = 0;
        minutos++;
        if (minutos / 60 === 1) {
            minutos = 0;
            horas++;
        }
    }

    const segundosConFormato = darFormatoDosCifras(segundos);
    const minutosConFormato = darFormatoDosCifras(minutos);
    const horasConFormato = darFormatoDosCifras(horas);

    const cronometro = document.getElementById('cronometro');
    cronometro.innerText = horasConFormato + ":" + minutosConFormato + ":" + segundosConFormato;
}

function darFormatoDosCifras(unidadDeTiempo) {
    if (unidadDeTiempo < 10) {
        return '0' + unidadDeTiempo;
    } else {
        return unidadDeTiempo;
    }
}

botonInicio.addEventListener('click', function () {
    if (estadoCronometro === 'pausado') {
        intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
        botonInicio.innerHTML = `<i class="bi bi-pause-fill"></i>`;
        botonInicio.classList.add('pausar');
        estadoCronometro = 'activo';
    } else {
        window.clearInterval(intervaloDeTiempo);
        botonInicio.innerHTML = '<i class="bi bi-play-fill"></i>';
        botonInicio.classList.remove('pausar');
        estadoCronometro = 'pausado';
    }
});

botonReset.addEventListener('click', function () {
    window.clearInterval(intervaloDeTiempo);

    segundos = '0';
    minutos = '0';
    horas = '0';

    cronometro.innerText = '00:00:00';
    botonInicio.innerHTML = '<i class="bi bi-play-fill"></i>';
    botonInicio.classList.remove('pausar');
    estadoCronometro = 'pausado';
});


