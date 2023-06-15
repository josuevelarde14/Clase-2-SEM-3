// Crea una clase Banco con propiedades nombre y cuentas. Agrega métodos para abrir una cuenta,
// realizar depósitos y retiros, y mostrar el saldo de una cuenta.
class Banco {
  nombre: string;
  cuentas: Cuenta[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.cuentas = [];
  }

  abrirCuenta(numero: number, saldoInicial: number): void {
    const nuevaCuenta = new Cuenta(numero, saldoInicial);
    this.cuentas.push(nuevaCuenta);
  }

  realizarDeposito(numero: number, monto: number): void {
    const cuenta = this.buscarCuenta(numero);
    if (cuenta) {
      cuenta.depositar(monto);
    } else {
      console.log(`La cuenta ${numero} no existe.`);
    }
  }

  realizarRetiro(numero: number, monto: number): void {
    const cuenta = this.buscarCuenta(numero);
    if (cuenta) {
      cuenta.retirar(monto);
    } else {
      console.log(`La cuenta ${numero} no existe.`);
    }
  }

  mostrarSaldo(numero: number): void {
    const cuenta = this.buscarCuenta(numero);
    if (cuenta) {
      console.log(`Saldo de la cuenta ${numero}: ${cuenta.saldo}`);
    } else {
      console.log(`La cuenta ${numero} no existe.`);
    }
  }

  buscarCuenta(numero: number): Cuenta | undefined {
    return this.cuentas.find((cuenta) => cuenta.numero === numero);
  }
}

class Cuenta {
  numero: number;
  saldo: number;

  constructor(numero: number, saldoInicial: number) {
    this.numero = numero;
    this.saldo = saldoInicial;
  }

  depositar(monto: number): void {
    this.saldo += monto;
  }

  retirar(monto: number): void {
    if (monto <= this.saldo) {
      this.saldo -= monto;
    } else {
      console.log("Saldo insuficiente.");
    }
  }
}
