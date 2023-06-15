// Crea una interfaz Ordenable con un método ordenar que reciba un array y
//  devuelva el array ordenado. Crea una clase OrdenadorNumeros que implemente la 
// interfaz y en el método ordenar ordene el array de números de menor a mayor.
interface Ordenable {
    ordenar(array: any[]): any[];
  }
  
  class OrdenadorNumeros implements Ordenable {
    ordenar(array: number[]): number[] {
      return array.sort((a, b) => a - b);
    }
  }
  