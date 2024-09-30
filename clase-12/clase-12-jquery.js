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
*/