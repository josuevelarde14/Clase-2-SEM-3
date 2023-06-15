// Crea una interfaz Traductor con un método traducir que reciba un texto y
//  devuelva el texto traducido. Crea una clase TraductorGoogle que implemente la 
//  interfaz y en el método traducir utilice la API de Google Translate para traducir el texto.
interface Traductor {
    traducir(texto: string): string;
  }
  
  class TraductorGoogle implements Traductor {
    traducir(texto: string): string {
      // Lógica para traducir el texto utilizando la API de Google Translate
      return "Texto traducido";
    }
  }
  