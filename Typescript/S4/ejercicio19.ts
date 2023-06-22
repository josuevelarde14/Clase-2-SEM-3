// Crea una interfaz Impresora con un método imprimir que reciba un documento y lo imprima. 
// Crea una clase ImpresoraPDF que implemente la interfaz y en el método imprimir convierta
//  el documento a formato PDF y lo imprima.typescript

interface Impresora {
    imprimir(documento: string): void;
  }
  
  class ImpresoraPDF implements Impresora {
    imprimir(documento: string): void {
      // Lógica para convertir el documento a PDF y luego imprimirlo
      console.log(`Imprimiendo documento en formato PDF: ${documento}`);
    }
  }
  