// •	Crea una clase base llamada Figura con un método para calcular el área. Luego, crea subclases como Círculo y Rectángulo que hereden de Figura y sobrescribe el método de cálculo de área según la forma.
// •	Crea instancias de las subclases y muestra el área de cada figura en la consola.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Clase base Figura
var Figura = /** @class */ (function () {
    function Figura() {
    }
    Figura.prototype.calcularArea = function () {
        return 0; // Método por defecto, se debe sobrescribir en las subclases
    };
    return Figura;
}());
// Subclase Círculo que hereda de Figura
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(radio) {
        var _this = _super.call(this) || this;
        _this.radio = radio;
        return _this;
    }
    Circulo.prototype.calcularArea = function () {
        return Math.PI * Math.pow(this.radio, 2);
    };
    return Circulo;
}(Figura));
// Subclase Rectángulo que hereda de Figura
var Rectangulo = /** @class */ (function (_super) {
    __extends(Rectangulo, _super);
    function Rectangulo(base, altura) {
        var _this = _super.call(this) || this;
        _this.base = base;
        _this.altura = altura;
        return _this;
    }
    Rectangulo.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}(Figura));
// Crear instancias y mostrar el área en la consola
var circulo = new Circulo(5);
console.log("Área del círculo:", circulo.calcularArea());
var rectangulo = new Rectangulo(4, 6);
console.log("Área del rectángulo:", rectangulo.calcularArea());
