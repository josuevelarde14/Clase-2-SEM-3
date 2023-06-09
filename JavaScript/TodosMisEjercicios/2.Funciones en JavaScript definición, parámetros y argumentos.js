// //Define una función llamada "saludar" que reciba un parámetro "nombre" y retorne
// un mensaje de saludo utilizando ese nombre. Llama a la función con un nombre
// y muestra el resultado en la consola.

function saludar(nombre) {
return "¡Hola, " + nombre + "! ¿Cómo estás?";
}

var nombre = "Josue";
var mensaje = saludar(nombre);
console.log(mensaje);

// Define una función llamada "esPar" que reciba un número como parámetro y
// retorne "true" si el número es par y "false" si es impar. Llama a la función con
// varios números y muestra los resultados en la consola.
function esPar(numero) {
    if (numero % 2 === 0) {
    return true;
} else {
    return false;
    }
}

var numero1 = 4;
var numero2 = 7;
var numero3 = 10;

console.log(esPar(numero1));
console.log(esPar(numero2));
console.log(esPar(numero3));

// Define una función llamada "multiplicar" que reciba dos números como
// parámetros y retorne su producto. Llama a la función con varios pares de números
// y muestra los resultados en la consola.
function multiplicar(num1, num2) {
    return num1 * num2;
}

var resultado1 = multiplicar(2, 4);
var resultado2 = multiplicar(5, 3);
var resultado3 = multiplicar(10, 2);

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);

// Define una función llamada "sumarLista" que reciba una lista de números como
// parámetro y retorne la suma de todos ellos. Llama a la función con diferentes
// listas de números y muestra los resultados en la consola.
function sumarLista(listaNumeros) {
    var suma = 0;
    for (var i = 0; i < listaNumeros.length; i++) {
    suma += listaNumeros[i];
    }
    return suma;
}

var lista1 = [1, 2, 3, 4, 5];
var lista2 = [10, 20, 30];
var lista3 = [2, 4, 6, 8];

console.log(sumarLista(lista1));
console.log(sumarLista(lista2));
console.log(sumarLista(lista3));
