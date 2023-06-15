// Crea una clase Empleado con propiedades nombre, salario y puesto.
// Crea un método para calcular el salario anual del empleado.
class Empleado {
  nombre: string;
  salario: number;
  puesto: string;

  constructor(nombre: string, salario: number, puesto: string) {
    this.nombre = nombre;
    this.salario = salario;
    this.puesto = puesto;
  }

  calcularSalarioAnual(): number {
    return this.salario * 12;
  }
}
