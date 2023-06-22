// Crea una interfaz RedSocial con un método publicar que reciba un mensaje y devuelva un
//  booleano indicando si la publicación se realizó correctamente.
//   Crea una clase Facebook que implemente la
//  interfaz y en el método publicar simule la publicación en Facebook
interface RedSocial {
    publicar(mensaje: string): boolean;
  }
  
  class Facebook implements RedSocial {
    publicar(mensaje: string): boolean {
      // Lógica para simular la publicación en Facebook
      console.log(`Publicando en Facebook: ${mensaje}`);
      return true;
    }
  }
  