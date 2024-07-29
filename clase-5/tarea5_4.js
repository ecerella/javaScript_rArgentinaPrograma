//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let lista = document.getElementById('lista');
let numeros = lista.getElementsByTagName('li');
elementos = [];

//Obtencion de numeros y almacenarlos en array
for (let i = 0; i < numeros.length; i++){
    let numero = parseInt(numeros[i].textContent); //convierto a valores numericos con parseInt
    if (!isNaN(numero)){
        elementos.push(numero);
    }
}

//verificar que elementos proporcione un array con valores
console.log(elementos);

let promedio = 0;

//hay elementos para promedio?
if (elementos.length > 0){ //error tipografico lengTTTTTh
    let suma = elementos.reduce((total, numero) => total + numero, 0);
    promedio = suma / elementos.length; //otra vez error tipografico lengTTTTTTTTTTTTh!
}

//mas chico La función Math.min() devuelve el menor de cero o más números.
let numeroMasChico = Math.min(...elementos);
let numeroMasGrande = Math.max(...elementos);

//numero que mas repite la lista.
let frecuenciaNumeros = {};
let numeroMasFrecuente;
let frecuenciaRepite = 0;

elementos.forEach(numero => {
    if (frecuenciaNumeros[numero]) {
        frecuenciaNumeros[numero]++;
    } else {
        frecuenciaNumeros[numero] =1;
    }

    if (frecuenciaNumeros[numero] > frecuenciaRepite){
        frecuenciaRepite = frecuenciaNumeros[numero];
        numeroMasFrecuente = numero;
    }
});

// Mostrar resultados en elementos <em> 
document.getElementById('promedio').textContent = `El promedio es ${promedio.toFixed(2)}`;
document.getElementById('numeroMasChico').textContent = `El menor de los numeros es ${numeroMasChico}`;
document.getElementById('numeroMasGrande').textContent = `El número mayor es ${numeroMasGrande}`;
document.getElementById('numeroMasFrecuente').textContent = `El número más frecuente es ${numeroMasFrecuente}`;