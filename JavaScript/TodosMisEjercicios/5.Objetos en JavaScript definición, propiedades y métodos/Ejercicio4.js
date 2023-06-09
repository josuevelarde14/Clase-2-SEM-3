// <!-- Crea un objeto llamado alumno con las propiedades nombre, apellido, edad y notas.
// Asigna valores a estas propiedades y luego crea un método llamado calcularPromedio
// que calcule el promedio de las notas del alumno y lo imprima en la consola -->
var alumno = {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 20,
  notas: [8, 9, 7],

  calcularPromedio: function () {
    var suma = 0;

    // Ciclo for para recorrer todas las notas del alumno
    for (var i = 0; i < this.notas.length; i++) {
      suma += this.notas[i];
    }
    // var i = 0; inicializa la variable de control i en 0. Esta variable se utilizará para acceder a cada nota del arreglo notas.
    // i < this.notas.length; es la condición de finalización del ciclo. Mientras i sea menor que la longitud del arreglo notas, el ciclo continuará ejecutándose.
    // i++ se ejecuta después de cada iteración y aumenta el valor de i en 1, permitiendo que el ciclo avance al siguiente elemento del arreglo.
    // suma += this.notas[i]; suma el valor de la nota actual (en la posición i del arreglo notas) a la variable suma. Esto se hace en cada iteración del ciclo, lo que acumula la suma total de todas las notas.

    var promedio = suma / this.notas.length; // Cálculo del promedio
    console.log("El promedio del alumno es: " + promedio);
  },
};

alumno.calcularPromedio();
