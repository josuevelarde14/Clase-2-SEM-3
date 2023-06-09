// Crea una clase llamada Lista que tenga una propiedad elementos que sea un array
// vacío y tres métodos: agregarElemento, removerElemento y imprimirLista. El
// método agregarElemento deberá recibir un parámetro y agregarlo al array elementos.
// El método removerElemento deberá recibir un índice y remover el elemento
// correspondiente del array elementos. El método imprimirLista deberá imprimir en la
// consola todos los elementos del array elementos. Crea una instancia de la clase y
// llama a los métodos para agregar y remover elementos de la lista.
class Lista {
  constructor() {
    this.elementos = [];
  }

  agregarElemento(elemento) {
    this.elementos.push(elemento);
  }

  removerElemento(indice) {
    this.elementos.splice(indice, 1);
  }

  imprimirLista() {
    console.log("Elementos de la lista:");
    for (let i = 0; i < this.elementos.length; i++) {
      console.log(this.elementos[i]);
    }
  }
}

const lista = new Lista();

lista.agregarElemento("Elemento 1");
lista.agregarElemento("Elemento 2");
lista.agregarElemento("Elemento 3");

lista.imprimirLista();
// Imprime:
// Elementos de la lista:
// Elemento 1
// Elemento 2
// Elemento 3

lista.removerElemento(1);

lista.imprimirLista();
// Imprime:
// Elementos de la lista:
// Elemento 1
// Elemento 3
