
//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!


document.querySelector('#ingresar').onclick = function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y la página se recargue

    const datosIngresadosUsuario = document.querySelectorAll('[data-name="datoUsuario"]');// Seleccion con atributo data-name="datoUsuario"
    let valores = []; //poner todo en un array
    for (let i = 0; i < datosIngresadosUsuario.length; i++) {
        valores.push(datosIngresadosUsuario[i].value);
    }

    const nombreUsuario = `${valores[0]} ${valores[1]}`;
    const mensajeBienvenida = `Bienvenido, ${nombreUsuario}`;

    document.querySelector('#saludo').textContent = mensajeBienvenida;

    const respuestas = `Nombre: ${valores[0]} ${valores[1]}, Apellido: ${valores[2]}, Edad: ${valores[3]}`;// Concatenar todo en un string

    document.querySelector('#respuestasUsuario').value = respuestas;// Mostrar
}

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*
* */

