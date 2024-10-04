// npm i --save-deb @types/jquery (insala dependencias para desarrollo)
/// <reference types="jquery"/>

// para seleccionar $header = document.querySelector('h1);
// con jquery poes signo $ y lo que queres dentro
const $header = $("h1");

//en java script $header.textContent ="Clase 12!");
$header.text("Clase 12!");

// const $elementos = document.querySelectorAll('#lista li'); (me da un node list [li, li, li, li, li])
const $elementos = $("#lista li");

//https://developer.mozilla.org/es/docs/web/api/Console/tabla
console.table({ header: $header.length, elementos: $elementos.length});

// si yo quisiera que por cada li poder hacerles click no podria usar onclick
// por que un node list no tiene metodos de captura
// podria usar document.querySelectorAll('#lista li').forEach((li) -> li.onclick = function(){console.log('click');})

/*$elementos.click(() => {
    console.log('click');
})
*/

$elementos.on("click", function(){
    console.log('click');
});
// $elementos.trigger();
/*const $buttons = $(".button"); // si esto trae 10 botones

$buttons.trigger('click'); // esto dispara el evento trigger en 10 botones

arrow functions: explicacion
funcion comun:

    function(){
    }

arrow function: (leiminamos la palabra function y entre parametros y cuerpo agrego =>)
()=>{
    }

diferencias:

//arrow functon no tienen this propio
$elementos.click(()=>{
    console.log(this);     //window
});
en una arrow function no hay this implicado, siempre responde al padre. windows
una funcion comun this responde en nuestro caso a cada li
//arrow functon no tienen this propio

$elementos.click(function(){
    console.log(this);     //li
});

*/
//fetch API: https://developer.mozilla.org/en-US/docs/web/API/Fetch_API
//usa promesas
/*Fetch("https://api.exchangeratesapi.io/latest") //FETCH devuelve una promesa, un objeto con metodo then
    .then(respuesta => respuesta.json())
    //igual a: .then(function(respuesta){ return respuesta.json();})
    .then(respuesta => {
        $("#resultado").text($("#resultado").text() + JSON.stringify(respuesta));
    })
    .catch(error => console.error("fallo", error));

console.log("esto pasa antes que la respuesta de fetch");


*/
//web API
$.ajax({ //asynchronous javascript and XML
    method: "GET",
    url:"https://api.exchangeratesapi.io/latest",
    success: respuesta => {
        console.log("respuesta de exchangeratesapi.io", respuesta);
        $("#resultado").text(JSON.stringify(respuesta));
    }
    //async: false //al descomentar esta linea, nada se ejecuta hasta que esta llamada termine.
});

console.log("esto pasa antes que la respuesta de $.ajax");




//CHAINING (concatenacion)
$elementos
    .addClass("rojo")
    .addClass("grande")
    .css({fontWeight:"bold"});

//funciona por que el metodo addClass, y casi todos los metodos jQery, devuelven el objeto original
//ejemplo de implementacion chaining:

const miObjeto = {
    decirHola(){
        console.log("hola");
        return this;
    },
    decirChau() {
        console.log("chau");
        return this;
    }
};

miObjeto
    .decirHola()
    .decirChau()
    .decirHola();
//cada funcion devuelve el mismo objeto, para encadenar



//ejemplo implementacion de promesas
function verificarMayorDeEdad(edadUsuario){
    return new Promise(function(resolve, reject){
        console.log("Verificando en un proceso externo larguisimo...");

        setTimeout(function(){
            if (edadUsuario >= 18){
                resolve("la edad era posta");
            }else{
                reject("la edad no era posta");
            }
        }, 5000);
    });
};

const edad = 17;
verificarMayorDeEdad(edad) //(si ejecuto solo la funcion me devuelve una promesa sin resolve ni reject)
    .then(mensaje => console.log(mensaje)) //cuando el them pasa una funcion se ejecuta el resolve
    .catch(error => console.error(error)); //cuando paso el catch se ejecuta el reject