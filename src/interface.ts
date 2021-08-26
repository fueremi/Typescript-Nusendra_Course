interface ILaptop {
    name: string;
    on(): void;
    off(): void;
}

class Asus implements Laptop {
    name: string;
    isGaming: boolean;

    constructor(name: string, isGaming: boolean) {
        this.name = name
        this.isGaming = isGaming
    }
    on(): void {
        console.log(`${this.name} is Starting ${this.isGaming === true ? 'for gaming' : ''} ...`);
    }
    off(): void {
        console.log(`${this.name} is Shutting Down ...`);
    }
}

class Macbook implements Laptop {
    name: string;
    isTouchbar: boolean;

    constructor(name: string, isTouchbar: boolean) {
        this.name = name
        this.isTouchbar = isTouchbar
    }
    on(): void {
        console.log(`${this.name} is Starting ${this.isTouchbar === true ? 'for programming' : ''} ...`);
    }
    off(): void {
        console.log(`${this.name} is Shutting Down ...`);
    }
}

let tuf = new Asus("TUF 15 Inch", true)
let pro = new Macbook("Macbook Pro M1 2021", true)
pro.on();
