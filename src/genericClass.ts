// ? Generic class

class List<T> {
    private data: T[];

    constructor(...elements: T[]) {
        this.data = elements
    }

    add(element: T): void {
        this.data.push(element)
    }

    addMutiple(...elements: T[]): void {
        this.data.push(...elements)
    }

    getAll(): T[] {
        return this.data;
    }
}

// ! Normal case
let numbers = new List<number>(1, 2, 3);
numbers.addMutiple(4, 5)
numbers.add(6)
console.log(numbers.getAll());

// ! Mutiple type data case
let random = new List<number | string>('Rian', 18, 'Ulvi', 3)
console.log(random.getAll());

