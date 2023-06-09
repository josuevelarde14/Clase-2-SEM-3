//Declara una variable "nombre" y asígnale un valor de tipo string. Luego, imprime el
//valor de la variable en la consola.
var nombre = "Josue";
console.log(nombre);

//Declara dos variables "num1" y "num2" y asígnales valores de tipo numérico. Luego,
//calcula la suma de ambos valores y guárdala en una nueva variable llamada
//"resultado". Imprime el valor de "resultado" en la consola.
var num1 = 5;
var num2 = 3;
var resultado = num1 + num2;
console.log(resultado);

//Declara una variable "esMayor" y asígnale un valor booleano. Luego, verifica si el
//valor de "esMayor" es verdadero o falso e imprime un mensaje en la consola
//dependiendo del resultado.
var esMayor = false;

if (esMayor) {
    console.log("La variable Mayor es verdadera.");
    } 
else {
    console.log("La variable Mayor es falsa.");
}

//Declara una variable "listaNumeros" y asígnale un valor de tipo array con al menos
//tres elementos numéricos. Luego, calcula la suma de todos los elementos y guárdala
//en una nueva variable llamada "total". Imprime el valor de "total" en la consola
var listaNumeros = [2, 4, 6];
var total = 0;

for (var i = 0; i < listaNumeros.length; i++) {
    total += listaNumeros[i];
}

console.log(total);

//Declara una variable "cadena1" y asígnale un valor de tipo string. Luego, declara otra
//variable "cadena2" y asígnale un valor de tipo string distinto. Concatena ambas
//cadenas y guárdalas en una nueva variable llamada "cadenaConcatenada". Imprime
//el valor de "cadenaConcatenada" en la consola.
var cadena1 = "Hola";
var cadena2 = "mundo";
var cadenaConcatenada = cadena1 + " " + cadena2;

console.log(cadenaConcatenada);



