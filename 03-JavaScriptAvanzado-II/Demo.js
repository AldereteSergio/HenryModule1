// Clausula Clousure

// function crearSaludo(saludo) {
//     return function(nombre){
//         console.log(saludo, nombre);
//     }
// }

// var saludarHola = crearSaludo("Hola")

// saludarHola("Jose")

// function crearSaludo(saludo) {
//     return function(nombre){
//         console.log(saludo, nombre);
//     }
// }

// crearSaludo("Hola")("Jose")

// function crearContador() {
//     count = 0
//     return function() {
//         count ++
//         return count
//     }
// }

// var contador1 = crearContador()
// console.log(contador1());

// var crearFunction = function () {
//     var arreglo = []   

//     for (var index = 0; index < 3; ++index) {
//         arreglo.push(function(){
//             console.log(index);
//         })
//     }
//     return arreglo
// }
// var indice = 0
// while (indice < 3) {
//     ++indice;
// }
// console.log(indice);

// var arr = crearFunction()
// arr[0]()
// arr[1]()
// arr[2]()

// Metodo Bind

// var persona = {
//     nombre: "Julian",
//     apellido: "Perez"
// }

// var mascota = {
//     nombre: "Napo",
//     edad: 8
// }

// var logNombre = function() {
//     console.log(this.nombre);
//     console.log(this.apellido);
// }

// //console.log(logNombre())

// //aplicar el metodo bind para apuntar a persona
// var logNombrePersona = logNombre.bind(persona)
// var logNombreMascota = logNombre.bind(mascota)
// logNombrePersona()
// logNombreMascota()

//
// function multiplica(a, b) {
//     return a * b
// }

// var multiplicaPorDos = multiplica.bind(this, 2)
// // Bindeamos el valor de 2 al parametro a
// console.log(multiplicaPorDos(3));

// Metodo call, se ejecuta inmediatamente, no es necesario guardarlo en una variable

var persona = {
    nombre: "Jose",
    segundoNombre: "Daniel"
}

var cohorte = {
    numero: 40,
    celular: "B"
}

// var logNombre = function() {
//     console.log(this.nombre);
//     console.log(this.numero);
// }

// logNombre.call(persona)
// logNombre.call(cohorte)

// APply

var logNombre = function(nombre, numero) {
    console.log(this.nombre + " esta en la cohorte " + nombre + " en el modulo " + numero);
}

//recibe un array como argumento
logNombre.apply(persona, ["m1", "40b"])


/*Metodos:
Bind: no se ejecuta automaticamente
Declarar una variable, para ejecutarle
Se crea una nueva funcion 

Call: Similar al metodo bind con la diferencia
Se ejecuta automaticamente
No se guarda en variable
No crea una nueva funcion

ApplyÑ Similar al metodo call con la diferencia
como le pasamos los parametros?
REcibe como argumentos un Array
No se guarda en variable.*/