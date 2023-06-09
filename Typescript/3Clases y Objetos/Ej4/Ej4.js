var Circulo = /** @class */ (function () {
    function Circulo(radio) {
        this.radio = radio;
    }
    Circulo.prototype.calcularperimetro = function () {
        console.log("Hola, el perimetro del circulo es" + this.radio * 3.1416 * 2);
    };
    return Circulo;
}());
var PC1 = new Circulo(6);
console.log(PC1.calcularperimetro());
