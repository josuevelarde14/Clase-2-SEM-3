// Crea una interfaz Encriptable con un método encriptar que reciba un texto y
//  devuelva el texto encriptado. Crea una clase EncriptadorAES que implemente la interfaz
// y en el método encriptar encripte el texto utilizando el algoritmo AES.
interface Encriptable {
    encriptar(texto: string): string;
  }
  
  class EncriptadorAES implements Encriptable {
    encriptar(texto: string): string {
      // Lógica para encriptar el texto utilizando AES
      return "Texto encriptado";
    }
  }
  