// ? Class
export class User {
    constructor(public name: string, public age: number = 24) { }

    setName = (value: string): void => {
        this.name = value
    }

    getName = (): string => {
        return this.name
    }
}

// ? Inheritance
class Admin extends User {
    read: boolean = true;
    write: boolean = true;
    phone: string;
    private _email: string = "";
    static getRoleName: string = "admin"

    constructor(phone: string, name: string, age: number) {
        super(name, age);
        this.phone = phone
    }

    static getNameRole() {
        return "Hei"
    }

    getRole = (): { read: boolean, write: boolean } => {
        return {
            read: this.read,
            write: this.write
        }
    }

    set email(value: string) {
        this._email = value
    }

    get email(): string {
        return this._email
    }
}


