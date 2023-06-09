var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Rectangulo.prototype.calculararea = function () {
        console.log("Hola, el area del triangulo es " + this.base * this.altura);
    };
    return Rectangulo;
}());
var R1 = new Rectangulo(6, 9);
console.log(R1.calculararea());
