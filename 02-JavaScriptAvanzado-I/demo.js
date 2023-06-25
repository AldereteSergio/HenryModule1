// function saludarMasTarde(){
//     var saludo = "Hola"

//     setTimeout(function(){
//         console.log(saludo);
//     }, 3000)
// }

// console.log(saludarMasTarde())

// Syntax Parser = Sintaxis correcta

// var string = "Hola"

// var nombre = "Ana Sofia"

// Lexical Environment = Lista: variables y funciones, que tenemos en nuestro codigo
// 

// function saludarAana (name) {
//     console.log("Hola " + name);
// }

// saludarAana(nombre)

// console.log(this)

// function a(){
//     function b(){
//         return this
//     }
//     return b()
// }

// console.log(a());

// var objeto = {
//     //propiedad : value
//     prop: 37,
//     metodoDelObjeto: function(){
//         return this.prop
//     }
// }

// console.log(objeto.metodoDelObjeto());
// class Persona{
//     constructor(nombre){

//     }
// }
function Persona(nombre) {
    this.nombre = nombre;
    this.amigos = ["Maxi", "Gaby"]
}
//prototype es para crear un metodo, este metodo es una fn()
Persona.prototype.getAmigos = function() {
    // crear variable de referencia para guardar a this
    var that = this
    this.amigos.forEach(function(amigo){
        console.log(that.nombre + " es amigo de ", amigo);
        //Wagner es amigo de "Maxi"
        //Wagner es amigo de "Gabi"
    })
    
}

var persona1 = new Persona("Wagner")
persona1.getAmigos()
