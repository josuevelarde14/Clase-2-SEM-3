// rea una interfaz Vehiculo con propiedades marca y modelo. Crea una
//  función que reciba un objeto que cumpla con la interfaz y muestre la información del vehículo.
interface Vehiculo {
    marca: string;
    modelo: string;
  }
  
  function mostrarInformacionVehiculo(vehiculo: Vehiculo): void {
    console.log(`Marca: ${vehiculo.marca}`);
    console.log(`Modelo: ${vehiculo.modelo}`);
  }
  