class Rectangulo {
    base:number;
    altura:number;

    constructor(base:number,altura:number) {
        this.base= base;
        this.altura= altura;
    }

    calculararea() {
        console.log(`Hola, el area del triangulo es` + this.base*this.altura)
    }
}

let R1:Rectangulo= new Rectangulo(6,9);
console.log(R1.calculararea());
