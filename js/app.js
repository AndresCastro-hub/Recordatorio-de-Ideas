const formulario = document.querySelector('#formulario');
const listaIdeas = document.querySelector('#lista-ideas')
let contenedor = [];

eventListeners()
function eventListeners(){
    formulario.addEventListener('submit', agregarIdeas);

    document.addEventListener('DOMContentLoaded', () => {
        contenedor = JSON.parse(localStorage.getItem('contenedor')) || []

        crearHtml()
    })
}

function agregarIdeas(e){
    e.preventDefault()

    const idea = document.querySelector('#ideas').value

    if(idea === ''){
        mensajeDeError('La idea no puede estar vacia')

        return;
    }

    const ideaObj = {
        id: Date.now(),
        idea 
    }

    contenedor = [...contenedor, ideaObj]

    crearHtml()

    formulario.reset()
}

function mensajeDeError(error){
    const mensaje = document.createElement('p')
    mensaje.textContent = error
    mensaje.classList.add('error')

    const contenido = document.querySelector('#contenido')

    contenido.appendChild(mensaje)

    setTimeout(() => {
        mensaje.remove()
    }, 3000);
}

function crearHtml(){

    limpiar()

    if(contenedor.length > 0){

    
        contenedor.forEach(idea => {

            const btnEliminar = document.createElement('a')
            btnEliminar.classList.add('borrar-ideas')
            btnEliminar.textContent = 'X'
    
            const li = document.createElement('li')

            li.innerText =  idea.idea

            li.appendChild(btnEliminar)

            listaIdeas.appendChild(li)

            btnEliminar.onclick = () => {
                borrarIdea(idea.id)
            }
        })
    }

    sincronizarStorage()
}

function sincronizarStorage(){
    localStorage.setItem('contenedor', JSON.stringify(contenedor))
}

function limpiar(){
    while(listaIdeas.firstChild){
        listaIdeas.removeChild(listaIdeas.firstChild)
    }
}

function borrarIdea(id){
    contenedor = contenedor.filter(idea => idea.id !== id)
    crearHtml()
}