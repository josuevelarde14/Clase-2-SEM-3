var SensorTemperatura = /** @class */ (function () {
    function SensorTemperatura() {
    }
    SensorTemperatura.prototype.leer = function () {
        // Lógica para simular la lectura de la temperatura
        var temperatura = Math.random() * 30 + 10; // Genera un número aleatorio entre 10 y 40
        var sensor = new SensorTemperatura();
        sensor.leer();
        console.log("Temperatura: " + temperatura);
        return temperatura;
    };
    return SensorTemperatura;
}());
