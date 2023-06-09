class Circulo {
    radio:number;

    constructor(radio:number) {
        this.radio= radio;
    }

    calcularperimetro() {
        console.log(`Hola, el perimetro del circulo es` + this.radio*3.1416*2)
    }
}

let PC1:Circulo= new Circulo(6);
console.log(PC1.calcularperimetro());
