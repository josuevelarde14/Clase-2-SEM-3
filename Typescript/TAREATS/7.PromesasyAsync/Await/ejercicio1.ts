// •	Crea una función asincrónica que devuelva una promesa que se resuelva después de un
//  tiempo determinado. Luego, utiliza async/await 
// para llamar a la función y mostrar el resultado cuando la promesa se resuelva.
function esperar(tiempo: number): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('La promesa se resolvió después de ' + tiempo + ' milisegundos');
      }, tiempo);
    });
  }
  
  async function mostrarResultado() {
    try {
      const resultado = await esperar(2000);
      console.log(resultado);
    } catch (error) {
      console.error('Ocurrió un error:', error);
    }
  }
  
  mostrarResultado();
  