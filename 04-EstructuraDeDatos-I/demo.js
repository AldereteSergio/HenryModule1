//Numero factorial -> Se genera otro contexto de ejecucion
//cuentaRegresiva(5)

//Numero factorial -> n!
// 5! = 5 * 4 * 3 * 2 * 1

function factorial(num) { // 5
// caso de corte / base
// if num(num === 0) {
//    return 1
// }
if(num === 0 || num === 1 ) return 1 // caso base
// if (num === 1) return 1

return num * factorial(num-1) // llamamos a la funcion le pasamos un parametro diferente
// return 3 * factorial (3 -1 )
// 3 * factorial(2) -> llamamos a la fn factorial()
// return 2 * factorial (1) 
}
//PILA DE EJECUCION O QUEUE 
// factorial(1) -> return 1
//factorial(2)


function sumaArray(array) { //[1, 2, 3, 4]
    //casobase
    if(array.length === 0) { //si se cumple el array esta vacio
        return 0
    } else {
        var primerNumero = array[0] // 1
        var restoDelArray = array.slice(1) // [2, 3, 4]
        return primerNumero + sumaArray(restoDelArray)
        //          1       + sumaArray([2, 3, 4])
    }
}
//PILA DE EJECUCION
//sumaArray([2, 3, 4])
sumaArray([1, 2, 3, 4])


//EStructura de datos
var persona = {
    nombre: "Jorsel",
    apellido: "Maurera"
}

console.log(persona);

var otraPersona = persona

console.log(otraPersona);

otraPersona.apellido = "Labrin"

//valor por Referencia
console.log(otraPersona); 
console.log(persona); 

var array = [0, 1, 2, true, "Ana Sofia", true, 2, 0]

//Estructura de datos : SET
var miSet = new Set(array)
// es un objeto
console.log(miSet);

var noRepetidos = [...miSet] //spreed operator
console.log(noRepetidos);