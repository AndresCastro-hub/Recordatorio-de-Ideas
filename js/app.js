//Variables
const formulario = document.querySelector('#formulario');
const listaIdeas = document.querySelector('#lista-ideas')
let ideas = [];


//Event Listeners

eventListeners()
function eventListeners(){
    formulario.addEventListener('submit', agregarIdeas);
}


//Functions 

function agregarIdeas(e){
    e.preventDefault()

    console.log('Agregando ideas...')
}
