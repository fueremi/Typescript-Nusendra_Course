// ? Abstract Class

abstract class Vehicle {
    abstract wheels: number

    start(): void {
        console.log("Brooommm");
    }
}

class Car extends Vehicle {
    wheels: number = 4;
}

class Motorcycle extends Vehicle {
    wheels: number = 2;
}

let bmw = new Car();
let honda = new Motorcycle();

