const URL = "https://pokeapi.co/api/v2/pokemon/"

const searchInput = document.getElementById("search");
const pokedexContainer = document.getElementById("pokedex");

//funcion principal
async function searchPokemon() {

    //convertir entrada a minusculas
    const searchedPokemon = searchInput.value.toLowerCase();

    try {

        const response = await fetch(URL + searchedPokemon) //variable que almacena busqueda de un pokemon
        const data = await response.json(); //convierto respuesta a json

        pokedexContainer.innerHTML = '<h2>${data.name.toupperCase()}</h2> <img src="${data.sprites.front_default}"/> <p>Numero: ${data.id}</p> <p>Altura: ${data.height/10}m</p> <p>Peso: ${data.weight/10}kg</p>';
            
    } catch (error) {
        console.error(error);
    }
}

document.getElementById('btn-search').addEventListener("click", searchPokemon);