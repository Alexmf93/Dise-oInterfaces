const frases =[
    "Te va a tocar la loteria",
    "Tira otra vez",
    "No salgas hoy",
    "Una sorpresa te espera en tu casa",
    "Te van a subir el sueldo"
]

//Seleccionar un documento del DOM
let parrafo = document.getElementById("txtResultado")

let boton = document.getElementById("botonSuerte")

//Añadir un evento a boton
boton.addEventListener("click", mostrarFrase)

//crear una funcion que muestre uno de los elementos del array
function mostrarFrase(){
    let indice = Math.random() * frases.length
    indice = Math.floor(indice)

    parrafo.innerText = frases [indice]
}

