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
    let salarios = []; //almaceno salarios

    document.querySelector('#entrada').addEventListener('click', function (event) {

        const personasFamilia = parseInt(document.querySelector('#personasFamilia').value);

        borrarEntradasAnteriores();
        crearIntegrantes(personasFamilia);
    });

    document.querySelector('#calcular').addEventListener('click', function (event) {


        //obtengo edades ingresadas
        const edadesEntradas = document.getElementsByName('edadIntegrante');
        const salariosEntradas = document.getElementsByName('salarioIntegrante');

        edades = [];
        salarios = [];

        //recorro edades y salarios y guardo si hay edad asociada y salario valido
        for (let i = 0; i < edadesEntradas.length; i++){
            const edad = parseInt(edadesEntradas[i].value);
            const salario = parseFloat(salariosEntradas[i].value);

            if (!isNaN(edad) && !isNaN(salario)){
                edades.push(edad);
                salarios.push(salario);
            }
        }

        //calculos edades
        const mayorEdad = Math.max(...edades);
        document.querySelector('#mayorEdad').textContent = mayorEdad;

        const menorEdad = Math.min(...edades);
        document.querySelector('#menorEdad').textContent = menorEdad;

        const sumaEdades = edades.reduce((total, edad) => total + edad, 0);
        const promedioEdades = sumaEdades / edades.length;
        document.querySelector('#promedioEdades').textContent = promedioEdades.toFixed(2);


        //calculos salarios
        const mayorSalario = math.max(...salarios);
        document.querySelector('#mayorSalario').textContent = mayorSalario.toFixed(2);

        const menorSalario = math.min(...salarios);
        document.querySelector('menorSalario').textContent = menorSalario.toFixed(2);

        const sumaSalarios = salarios.reduce((total, salario) => total + salario, 0);
        const promedioSalarios = sumaSalarios / salarios.length;
        document.querySelector('#promedioSalarios').textContent = promedioSalarios.toFixed(2);

        //promedio salario mensual?
        const salarioMensualPromedio = promedioSalarios / 12; 
        document.querySelector('#salarioMensualPromedio').textContent = salarioMensualPromedio.toFixed(2);

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

        const labelEdad = document.createElement('label');
        labelEdad.textContent = 'Edad del integrante #' + indice + ':';

        const inputEdad = document.createElement('input');
        inputEdad.type = 'number';
        inputEdad.name = 'edadIntegrante';

        const labelSalario = document.createElement('label');
        labelSalario.textContent = 'Salario anual del integrante #' + indice + ':';

        const inputSalario = document.createElement('input');
        inputSalario.type = 'number';
        inputSalario.name = 'salarioIntegrante';

        div.appendChild(labelEdad);
        div.appendChild(inputEdad);
        div.appendChild(labelSalario);
        div.appendChild(inputSalario);

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
