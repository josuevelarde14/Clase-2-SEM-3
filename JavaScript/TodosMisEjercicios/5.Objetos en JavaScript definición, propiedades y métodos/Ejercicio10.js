// <!-- Crea un objeto llamado calculadora con las propiedades numeros y operaciones.
// Asigna valores a estas propiedades, donde numeros será un arreglo de números y
// operaciones será un arreglo de cadenas que representen una operación matemática
// (suma, resta, `multiplicacion -->
var calculadora = {
  numeros: [2, 5, 10],
  operaciones: ["suma", "resta", "multiplicacion"],
  realizarOperacion: function () {
    for (var i = 0; i < this.numeros.length; i++) {
      var numero = this.numeros[i];
      var operacion = this.operaciones[i];
      switch (operacion) {
        case "suma":
          console.log("Resultado de la suma: " + (numero + numero));
          break;
        case "resta":
          console.log("Resultado de la resta: " + (numero - numero));
          break;
        case "multiplicacion":
          console.log("Resultado de la multiplicación: " + numero * numero);
          break;
        default:
          console.log("Operación no válida");
          break;
      }
    }
  },
};

calculadora.realizarOperacion();
// Imprime:
// Resultado de la suma: 4
// Resultado de la resta: 0
// Resultado de la multiplicación: 100
