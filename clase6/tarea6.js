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

    let edades = []; //almaceno edades

    document.querySelector('#entrada').addEventListener('click', function (event) {

        const personasFamilia = parseInt(document.querySelector('#personasFamilia').value);

        borrarEntradasAnteriores();
        crearIntegrantes(personasFamilia);
    });

    document.querySelector('#calcular').addEventListener('click', function (event) {


        //obtengo edades ingresadas
        const edadesEntradas = document.getElementsByName('edadIntegrante');
        edades = [];
        for (let i = 0; i < edadesEntradas.length; i++){
            edades.push(parseInt(edadesEntradas[i].value));//parseint convierte edades a numeros
        }

        //calculos
        const mayor = Math.max(...edades);
        document.querySelector('#mayorEdad').textContent = mayor;

        const menor = Math.min(...edades);
        document.querySelector('#menorEdad').textContent = menor;

        const sumaEdades = edades.reduce((total, edad) => total + edad, 0);
        const promedio = sumaEdades / edades.length;
        document.querySelector('#promedioEdades').textContent = promedio.toFixed(2);

        //mostrar resultados
        ocultarResultados(false);
    });


    document.querySelector('#reset').addEventListener('click', resetear);

    function borrarEntradasAnteriores() {
        const integrantes = document.querySelectorAll('.integrante');
        integrantes.forEach(integrante => integrante.remove());
        ocultarResultados(true);
    }

    function crearIntegrantes(personasFamilia) {
        if (personasFamilia > 0) {
            mostrarBotonCalcular();
            for (let i = 0; i < personasFamilia; i++) {
                crearIntegrante(i + 1);
            }
        } else {
            resetear();
        }
    }

    function crearIntegrante(indice) {
        const div = document.createElement('div');
        div.className = 'integrante';

        const label = document.createElement('label');
        label.textContent = 'Edad del integrante #' + indice + ':';

        const input = document.createElement('input');
        input.type = 'number';
        input.name = 'edadIntegrante';

        div.appendChild(label);
        div.appendChild(input);

        const integrantes = document.querySelector('#personas');
        integrantes.appendChild(div);
    }

    function resetear() {
        borrarEntradasAnteriores();
    }

    function mostrarBotonCalcular() {
        document.querySelector('#calcular').classList.remove('oculto');
    }

    function ocultarResultados(ocultar) {
        const resultados = document.querySelector('#resultados');
        resultados.classList.toggle('oculto', ocultar);
    }
});
