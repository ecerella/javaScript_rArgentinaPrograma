const URL = "https://pokeapi.co/api/v2/pokemon/"

const searchInput = document.getElementById("search");
const pokedexContainer = document.getElementById("pokedex");

function showError(msg){
    pokedexContainer.innerHTML = `<p>${msg}</p>`; 
}

//funcion principal
async function searchPokemon() {

    //convertir entrada a minusculas
    const searchedPokemon = searchInput.value.toLowerCase();

    try {

        const response = await fetch(URL + searchedPokemon) //variable que almacena busqueda de un pokemon

        if (!response.ok) {
            showError(`No se encontro un pokemon llamado: ${searchedPokemon}`); //error en nombre de pokemon
            return; //paro la ejecucion
        }

        const data = await response.json(); //convierto respuesta a json

        pokedexContainer.innerHTML =
        ` 
            <h2> ${data.name.toUpperCase()}</h2>
            <img src="${data.sprites.front_default}"/>
            <p>Numero: ${data.id}</p>
            <p>Altura: ${data.height/10}m</p>
            <p>Peso: ${data.weight/10}kg</p>
        `; //comillas invertidas, sino, no funciona (sustitucion de comandos)
            
    } catch (error) {
        console.error(error);
        showError('Ha fallado la busqueda del pokemon');
    }
}

document.getElementById('btn-search').addEventListener("click", searchPokemon);