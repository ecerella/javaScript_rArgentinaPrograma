//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

let totalHoras = 0;
let totalMinutos = 0;
let totalSegundos = 0;
let totalClases = 0;
let clasesIngresadas = 0;

const numeroClasesForm = document.querySelector("#numeroClasesForm");
const detallesForm = document.querySelector("#formulario");

numeroClasesForm.onsubmit = (event) => {
    event.preventDefault();
    totalClases = Number(document.querySelector("#numeroDeClases").value);
    clasesIngresadas = 0;

    if (totalClases > 0) {
        detallesForm.style.display = 'flex';
        numeroClasesForm.style.display = 'none';
    }
};

detallesForm.onsubmit = (event) => {
    event.preventDefault();

    const horasDeClase = Number(document.querySelector("#horasClase").value);
    const minutosDeClase = Math.floor(Number(document.querySelector("#minutosClase").value));
    const segundosDeClase = Number(document.querySelector("#segundosClase").value);

    totalHoras += horasDeClase;
    totalMinutos += minutosDeClase;
    totalSegundos += segundosDeClase;

    totalMinutos += Math.floor(totalSegundos / 60);
    totalSegundos = totalSegundos % 60;

    totalHoras += Math.floor(totalMinutos / 60);
    totalMinutos = totalMinutos % 60;

    clasesIngresadas++;

    if (clasesIngresadas < totalClases) {
        document.querySelector("#horasClase").value = '';
        document.querySelector("#minutosClase").value = '';
        document.querySelector("#segundosClase").value = '';
    } else {
        const contenido = `Después de ${totalClases} clases, tienes un total acumulado de ${totalHoras} horas, ${totalMinutos} minutos y ${totalSegundos} segundos.`;
        document.querySelector('#contenido').textContent = contenido;

        detallesForm.style.display = 'none';
        numeroClasesForm.style.display = 'flex';
        document.querySelector("#numeroDeClases").value = '';
    }
};
