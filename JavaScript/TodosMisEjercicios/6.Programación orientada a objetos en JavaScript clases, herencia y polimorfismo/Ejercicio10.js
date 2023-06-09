// Crea una clase llamada CuentaBancaria que tenga propiedades como titular, saldo,
// etc. y métodos como depositar y retirar que modifiquen el saldo. Luego crea una clase
// hija llamada CuentaDeAhorro que tenga una propiedad interes y un método
// calcularInteres que calcule y devuelva el interés ganado. Luego crea una instancia de
// la clase CuentaDeAhorro y llama al método calcularInteres
class Banco {
  constructor() {
    this.clientes = [];
  }

  agregarCliente(cliente) {
    this.clientes.push(cliente);
  }

  buscarCliente(nombre) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].nombre === nombre) {
        return this.clientes[i];
      }
    }
    return null;
  }
}

const banco = new Banco();

const cliente1 = { nombre: "Juan", edad: 30 };
const cliente2 = { nombre: "María", edad: 25 };
const cliente3 = { nombre: "Pedro", edad: 35 };

banco.agregarCliente(cliente1);
banco.agregarCliente(cliente2);
banco.agregarCliente(cliente3);

const clienteEncontrado = banco.buscarCliente("María");
console.log(clienteEncontrado); // Imprime { nombre: "María", edad: 25 }
