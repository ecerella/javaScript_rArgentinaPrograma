const $form = document.querySelector('#carta-a-santa');

const nombre = $form.nombre;
/* formas de hacer lo mismo:
nombre = document.querySelector('[name=nombre]').value;
nombre = document.querySelector('#nombre').value; */
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value;

console.log(nombre);
console.log(ciudad);
console.log(comportamiento);
console.log(descripcionRegalo);

function validarNombre(nombre) {
    if(nombre.length === 0){
        return "Este campo debe tener al menos 1 caracter";
    }
    if(nombre.length >= 50){
        return "Este campo debe tener menos de 50 caracteres";
    }
    return "";
}

function validarCiudad(ciudad) {
    if(ciudad.length === 0){
        return "Este campo esta vacio";
    }
    return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
    if(descripcionRegalo.length >=  100){
        return "El campo descripccion tiene mas de cien caracteres";
    }
    if(descripcionRegalo.lenght === "") {
        return "No asigno un regalo a recibir";
    }
    return "";
}

//validarCiudad
//validarDescripcionRegalo

//escribir pruebas funciones tareas 5 y 6
