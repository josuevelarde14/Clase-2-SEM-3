// Crea una interfaz Banco con un método realizarTransferencia que reciba un monto y devuelva un 
// booleano indicando si la transferencia se realizó correctamente. Crea una clase CuentaBancaria que 
// implemente la interfaz y en el método realizarTransferencia simule la transferencia.
interface Banco {
    realizarTransferencia(monto: number): boolean;
  }
  
  class CuentaBancaria implements Banco {
    realizarTransferencia(monto: number): boolean {
      // Lógica para simular la transferencia
      if (monto > 0) {
        console.log(`Se realizó una transferencia de $${monto}`);
        return true;
      } else {
        console.log("No se pudo realizar la transferencia");
        return false;
      }
    }
  }
  