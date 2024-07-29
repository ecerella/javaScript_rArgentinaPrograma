// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.


//tarea uno
let nombre = prompt('Cual es tu nombre: ') || ""; // si la entrada es nada(false) elije || derecha.
const miNombre = "ezequiel";
const miAmigo = "adrian";
const miEdad = 53

if (nombre === miNombre){
    console.log(`Hola, Tocayo! Yo también me llamo ${miNombre}`)
}else if (nombre === miAmigo){
    console.log(`Hola ${nombre}, te llamás igual que mi amigo ${miAmigo}`)
}else{
    console.log(`Hola ${nombre}`)
}


//tarea2
let edad = Number(prompt('cual es tu edad: '));

if (edad === miEdad){
    console.log('Tienes mi misma edad! ');
}else if (edad < miEdad){
    console.log('Eres menor que mi edad.')
}else{
    console.log('Eres mayor que yo')
}


//tarea3
let edad2 = 0 // uso otra variable para no pisar la de tarea2
let documento = prompt('tienes documento? responde si/no')

if (documento.toLowerCase() === 'si'){
    edad2 = Number(prompt('Cual es tu edad: '));

        if (edad2 >= 18){
            console.log('Puedes entrar al bar');
        }else if (edad2 < 18){
            console.log('No puedes entrar al bar');
        }

}else if (documento.toLowerCase() === 'no'){
    console.log('No puedes entrar al bar');

}else{
    console.log('No entiendo tu respuesta')
}