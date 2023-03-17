function cargarPersonajes(personajes, container){
    
    personajes.forEach( personaje => {
        
        const personajeUI = document.createElement("div");
        personajeUI.classList.add('personaje');
        const personajeId = document.createTextNode(`ID: ${personaje.id}`);
        const personajeImg = document.createElement('img');
        personajeImg.src = personaje.image
        personajeImg.classList.add('imagen');
        const personajeName = document.createTextNode(personaje.name);
        personajeUI.appendChild(personajeId);
        personajeUI.appendChild(document.createElement('br'));
        personajeUI.appendChild(personajeImg);
        personajeUI.appendChild(document.createElement('br'));
        personajeUI.appendChild(personajeName);
        container.appendChild(personajeUI);
    })
}

let page = 1;

function main(){

    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("flex-container");
        cargarPersonajes(data.results, container)
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });
  
}

function addPersonajes(){
    if(page < 42)
        page += 1;
    else{
        button = document.getElementById('button');
        button.disabled = 'true';
    }

    main();
}

main();