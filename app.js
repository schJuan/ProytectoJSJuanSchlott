let vacio = document.querySelector(".contenedor")
let agregado = document.createElement("h2")
agregado.innerHTML = "parrafo de prueba"
vacio.insertBefore(agregado, vacio.children[1])
