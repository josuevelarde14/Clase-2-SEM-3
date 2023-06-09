// <!-- Crea un objeto llamado banco con las propiedades nombre y clientes. Asigna valores
// a estas propiedades, donde clientes será un arreglo de objetos que representen un
// cliente, cada objeto debe tener las propiedades nombre, apellido y saldo. Luego, crea
// un método llamado calcularSaldoTotal que calcule el saldo total de todos los clientes
// y lo imprima en la consola. -->
var banco = {
  nombre: "Banco XYZ",
  clientes: [
    { nombre: "Juan", apellido: "Pérez", saldo: 1000 },
    { nombre: "María", apellido: "Gómez", saldo: 500 },
    { nombre: "Pedro", apellido: "López", saldo: 1500 },
  ],
  calcularSaldoTotal: function () {
    var saldoTotal = 0;
    for (var i = 0; i < this.clientes.length; i++) {
      saldoTotal += this.clientes[i].saldo;
    }
    console.log("El saldo total de los clientes es: " + saldoTotal);
  },
};

banco.calcularSaldoTotal(); // Imprime "El saldo total de los clientes es: 3000"
