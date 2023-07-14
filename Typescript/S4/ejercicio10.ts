// Crea una interfaz Empleado con propiedades nombre y salario. Crea una 
// función que reciba un objeto que cumpla con la interfaz y muestre la información del empleado
interface Empleado {
    nombre: string;
    salario: number;
  }
  
  function mostrarInformacionEmpleado(empleado: Empleado): void {
    console.log(`Nombre: ${empleado.nombre}`);
    console.log(`Salario: ${empleado.salario}`);
  }
  
  