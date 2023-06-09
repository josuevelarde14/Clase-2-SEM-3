// 1. Utiliza un "if/else" para imprimir un mensaje si un número es positivo o negativo.
var numero = -5;

if (numero >= 0) {
  console.log("El número es positivo.");
} else {
  console.log("El número es negativo.");
}

// 2. Utiliza un "switch" para imprimir un mensaje dependiendo del día de la semana.
var dia = "lunes";

switch (dia) {
  case "lunes":
    console.log("Hoy es lunes.");
    break;
  case "martes":
    console.log("Hoy es martes.");
    break;
  case "miércoles":
    console.log("Hoy es miércoles.");
    break;
  case "jueves":
    console.log("Hoy es jueves.");
    break;
  case "viernes":
    console.log("Hoy es viernes.");
    break;
  case "sábado":
    console.log("Hoy es sábado.");
    break;
  case "domingo":
    console.log("Hoy es domingo.");
    break;
  default:
    console.log("Día no válido.");
    break;
}

// 3. Utiliza un "while" para imprimir los números del 1 al 10.
var i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

// 4. Utiliza un "do/while" para imprimir los números del 1 al 10.
var i = 1;

do {
  console.log(i);
  i++;
} while (i <= 10);

// 5. Utiliza un "for" para imprimir los números pares del 2 al 20.
for (var i = 2; i <= 20; i += 2) {
  console.log(i);
}

// 6. Utiliza un "for" para imprimir los números impares del 1 al 19.
for (var i = 1; i <= 19; i += 2) {
  console.log(i);
}

// 7. Utiliza un "for" para imprimir la tabla de multiplicar del 5.
var numero = 5;

for (var i = 1; i <= 10; i++) {
  var resultado = numero * i;
  console.log(numero + " x " + i + " = " + resultado);
}

// 8. Utiliza un "while" para imprimir los números de la serie de Fibonacci menores a 100.
var a = 0;
var b = 1;

while (a < 100) {
  console.log(a);
  var temp = a;
  a = b;
  b = temp + b;
}
