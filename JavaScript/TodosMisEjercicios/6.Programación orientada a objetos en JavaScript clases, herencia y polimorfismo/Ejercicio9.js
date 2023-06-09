// Crea una clase llamada Banco que tenga una propiedad clientes que sea un array vacío
// y dos métodos: agregarCliente y buscarCliente. El método agregarCliente deberá
// recibir un objeto cliente (con propiedades como nombre, edad, etc.) y agregarlo al
// array clientes. El método buscarCliente deberá recibir un nombre y buscar el objeto
// cliente correspondiente en el array clientes. Luego crea una instancia de la clase y
// llama a los métodos para agregar algunos clientes y buscar uno de ellos.
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

const clienteEncontrado = banco.buscarCliente("Juan");
console.log(clienteEncontrado); // Imprime { nombre: "María", edad: 25 }
