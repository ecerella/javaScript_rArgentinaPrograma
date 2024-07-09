/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad 
y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando 
los inputs ya creados (investigar cómo en MDN).
*/


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para 
completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, 
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/



document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#entrada').onclick = function (event) {
        event.preventDefault();
        const $personasFamilia = document.querySelector('#personasFamilia');
        const personasFamilia = Number($personasFamilia.value);

        borrarEntradasAnteriores();
        crearIntegrantes(personasFamilia);
    };

    document.querySelector('#reset').onclick = resetear;

    function borrarEntradasAnteriores() {
        const $personas = document.querySelectorAll('.integrante');
        for (let i = 0; i < $personas.length; i++) {
            $personas[i].remove();
        }
    }

    function crearIntegrantes(personasFamilia) {
        if (personasFamilia > 0) {
            mostrarBotonEnter();
            for (let i = 0; i < personasFamilia; i++) {
                crearIntegrante(i);
            }
        } else {
            resetear();
        }
    }

    function crearIntegrante(indice) {
        const $div = document.createElement('div');
        $div.className = 'integrante';

        const $label = document.createElement('label');
        $label.textContent = 'Edad del integrante #' + (indice + 1) + ':';
        const $input = document.createElement('input');
        $input.type = 'number';
        $input.name = 'edadIntegrante'; // Agregar un nombre para identificar luego

        $div.appendChild($label);
        $div.appendChild($input);

        const $integrantes = document.querySelector('#personas');
        $integrantes.appendChild($div);
    }

    function resetear() {
        borrarEntradasAnteriores();
        ocultarResultados();
    }

    function mostrarBotonEnter() {
        document.querySelector('#resultados').classList.add('oculto');
    }

    function ocultarResultados() {
        document.querySelector('#resultados').classList.remove('oculto');
    }
});