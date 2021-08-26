import Laptop from "./Laptop"
import { b } from "./Keyboard"

abstract class BaseLaptop<T> implements Laptop<T> {
    name: string;
    type: T;
    withNumeric: boolean;
    withTouchButton: boolean;

    constructor(name: string, type: T, numeric: boolean, touchButton: boolean) {
        this.name = name;
        this.type = type;
        this.withNumeric = numeric;
        this.withTouchButton = touchButton
    }

    b(): void {
        console.log(b());

    }
}

export default BaseLaptop;