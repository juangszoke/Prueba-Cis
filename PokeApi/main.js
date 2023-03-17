function cargarPokemones( pokemones, container ){

    pokemones.forEach( async (pokemon) => {
    try{
        pokemonData = await fetch(pokemon.url);
        pokemonDataJSON = await pokemonData.json();

        const pokemonUI = document.createElement("div");
        pokemonUI.classList.add('personaje');
        const pokemonId = document.createTextNode(`ID: ${pokemonDataJSON.id}`);
        const pokemonImg = document.createElement('img');
        pokemonImg.src = pokemonDataJSON.sprites.front_default
        const pokemonName = document.createTextNode(pokemonDataJSON.name);
        pokemonUI.appendChild(pokemonId);
        pokemonUI.appendChild(document.createElement('br'));
        pokemonUI.appendChild(pokemonImg);
        pokemonUI.appendChild(document.createElement('br'));
        pokemonUI.appendChild(pokemonName);
        container.appendChild(pokemonUI);
    }
    catch(error){
        console.error(error);
    }
    }) 
}

var offset = 0;

async function main(){
    try {
    pokemones = await fetch(`https://pokeapi.co/api/v2/pokemon-form?offset=${offset}&limit=20`);
    pokemonInformation = await pokemones.json();
    const currentDiv = document.getElementById("flex-container");
    cargarPokemones(pokemonInformation.results, currentDiv)
    }
    catch(error){
        console.error(error);
    }
}

function addPokemon(){
    offset += 20;
    main();
}


main();