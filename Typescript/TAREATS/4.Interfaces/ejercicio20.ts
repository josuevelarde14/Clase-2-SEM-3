// Crea una interfaz Sensor con un método leer que devuelva el valor leído por el sensor. 
// Crea una clase SensorTemperatura que implemente la interfaz y en el
//  método leer simule la lectura de la temperatura ambiente.
interface Sensor {
    leer(): number;
  }
  
  class SensorTemperatura implements Sensor {
    leer(): number {
      // Lógica para simular la lectura de la temperatura
      const temperatura = Math.random() * 30 + 10; // Genera un número aleatorio entre 10 y 40
      return temperatura;
    }
  }
  