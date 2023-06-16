class Animal{
    name:string;

    constructor(name:string){
        this.name=name
    }

    eat(){
        console.log(`${this.name} esta comiendo.`);
    }
}

class Dog extends Animal {
    breed:string;

    constructor(name:string, breed:string) {
        super(name);
        this.breed=breed;    
    }

    bark() {
        console.log(`${this.name} esta ladrando.`);
    }
}

let p= new Dog("fido","ladro");
p.eat();
p.bark();