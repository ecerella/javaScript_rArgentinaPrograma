#tareas Clase 12

##Construir un pokedex https://pokeapi.co/

-Consultar Documentacion
-Listar pokemones, y poder cambiar pagina
-ver detalles del pokemon, incluyendo al menos 1 foto

===============================================================

RESTful Web APIs

HTTP Request                    /*todos los request tienen un header y un body
Header - Body

GET body = vacio.
GET - pokemon.com/pokemon       /*entrega una lista de pokemones*/
GET - pokemon.com/pokemon/1     /*entrega uno en particular*/

POST - pokemon.com/pokemon      /*crear un pokemon

body: {nombre: "pokemonNuevo", height:5, weight; 100}
RESPUESTA con el nuevo recurso => los contenidos de pokemon.com/pokemon/1000 
{id: 1000, nombre: "pokemonNuevo", height: 5, weight: 100}

PUT - pokemon.com/pokemon/1     /*reemplaza un pokemon (envio toda la entidad)
PISAR/REEMPLAZAR un pokemon
{id: 1, nombre: "pokemonNuevo", height: 5, weight: 100}

PATCH - pokemon.com/pokemon/1   /* cambia solo un dato, en este casdo nombre
{nombre: "pokemonNuevo"}

DELETE - pokemon.com/pokemon/1  /*borra registro
BODY: vacio
Respuesta: {success: true}
