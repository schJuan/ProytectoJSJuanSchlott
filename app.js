/*let vacio = document.querySelector(".contenedor")
let agregado = document.createElement("h2")
agregado.innerHTML = "parrafo de prueba"
vacio.insertBefore(agregado, vacio.children[1])*/
const contenedor = document.querySelector(".contenedor")
contenedor.addEventListener("mouseenter", ()=>{
    console.log("maous dentro del contenedor")
})
console.log(contenedor)