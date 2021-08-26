// ? Function with return

function getName(): string {
    return "Hello, My Name is Rian"
}

function getAge(): number {
    return 24
}

// ? Function without return
function printName(): void {
    console.log("Print Name");
}

// ? Function with params
function mutiply(numA: number, numB: number): number {
    return numA * numB
}

// ? Function as type
type Tambah = (num1: number, num2: number) => number;

const Add: Tambah = (num1: number, num2: number): number => {
    return num1 + num2
}

// ? Default Params
const fullName = (first: string, last: string = "Amartek"): string => {
    return `${first} ${last}`
}

// ? Optional Params
const concat = (val1: string, val2?: string): string => {
    return `${val1} ${val2}`
}
