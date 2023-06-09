// <!-- Crea un objeto llamado rectangulo con las propiedades base y altura. Asigna valores
// a estas propiedades y luego crea un método llamado calcularArea que calcule el área
// del rectángulo y lo imprima en la consola. -->
var rectangulo = {
  base: 5,
  altura: 10,
  calcularArea: function () {
    var area = this.base * this.altura;
    console.log("El área del rectángulo es: " + area);
  },
};

rectangulo.calcularArea(); // Imprime "El área del rectángulo es: 50"
