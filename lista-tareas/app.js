const input = document.getElementById('input-tarea');
const boton = document.getElementById('crear-tarea');
const lista = document.getElementById('lista-tareas');


function crearTarea() {
    if (input.value) {
        // crear contenedor tarea
        let nuevaTarea = document.createElement('div');
        nuevaTarea.classList.add('tarea');

        // añadir texto a tarea 
        let textoTarea = document.createElement('p');
        textoTarea.innerText = input.value;
        nuevaTarea.appendChild(textoTarea);

        // crear contenedor iconos
        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
         
        nuevaTarea.appendChild(iconos);

        //crear iconos
        let completar = document.createElement('i');
        completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
        completar.addEventListener('click', completarTarea);

        let eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
        eliminar.addEventListener('click', eliminarTarea);

        //añadir iconos
        iconos.append(completar, eliminar);

        //añadir tarea a la lista de tareas
        lista.appendChild(nuevaTarea);
    } else {
        alert('Por favor. Escribe una tarea.');
    }
}

function completarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle('completada');
}

function eliminarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
}

// evento al pulsar crear tarea
boton.addEventListener('click', crearTarea);

input.addEventListener('keydown', (e) =>{
if (e.key === 'Enter') {
    crearTarea();
}
});










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


