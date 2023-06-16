class Shape {
    calculateArea() {
        return 0;
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;        
    }
}

//let l= new Rectangle(5,10);
//let q= new Circle(7);
//l.calculateArea();
//q.calculateArea();

function printArea(shape: Shape) {
    console.log(`Area: ${shape.calculateArea()}`);
}

const rectangle = new Rectangle(5, 10);
const circle = new Circle(7);

printArea(rectangle); //
printArea(circle);