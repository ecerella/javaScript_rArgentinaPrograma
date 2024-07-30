const $form = document.querySelector("#carta-a-santa");

const nombre = document.querySelector('#nombre').value;

/* formas de hacer lo mismo:
nombre = document.querySelector('[name=nombre]').value;
const nombre = $form.nombre;
*/
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value;


function validarNombre(nombre) {
    if(nombre.length === 0){
        return "Este campo debe tener al menos 1 caracter";
    }
    if(nombre.length >= 50){
        return "Este campo debe tener menos de 50 caracteres";
    }

    if(/^[a-z]+$/i.test(nombre)) {
        return "El campo nombre solo acepta letras"
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
    if(/^[a-z0-9]+$/i.test(descripcionRegalo)){
        return"El campo descripccion solo puede tener numeros y letras";
    }
    return "";
}

function validarFormulario(event) {
    const $form = document.querySelector("#carta-a-santa");

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form["descripcion-regalo"].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        descripcionRegalo: errorDescripcionRegalo
    };

    manejarErrores(errores);

    event.preventDefault();
}

function manejarErrores(errores) {
    errorNombre = errores.nombre; //nombre
    errorCiudad = errores.ciudad;
    errorDescripcionRegalo = errores.descripcionRegalo;

    if (errorNombre) {
        $form.nombre.className = "error";
    }else{
        $form.nombre.className = "";
    }

    if (errorCiudad) {
        $form.ciudad.className = "error";
    }else{
        $form.ciudad.className = "";
    }

    if (errores.descripcionRegalo) {
        $form['descripcion-regalo'].className = "error";
    }else{
        $form['descripcion-regalo'].className = "";
    }
}

$form.onsubmit = validarFormulario;