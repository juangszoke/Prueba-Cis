async function cargarPokemons( pokemons, container ){

    //console.log(pokemons)
    pokemons.forEach(  async (pokemon) => {
    try{
       // console.log(pokemon)
        pokemonData = await fetch(pokemon.url);
       // console.log(pokemonData)
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

let offset = 0;

async function main(){
    try {
    pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon-form?offset=${offset}&limit=20`);
    
    pokemonInformation = await pokemons.json();
    const container = document.getElementById("flex-container");
    cargarPokemons(pokemonInformation.results, container)
    }
    catch(error){
        console.error(error);
    }
}

function addPokemon(){

    if(offset < 1440) 
        offset += 20;
    else{
        button = document.getElementById('button');
        button.disabled = 'true';
    }

    main();
}

main();