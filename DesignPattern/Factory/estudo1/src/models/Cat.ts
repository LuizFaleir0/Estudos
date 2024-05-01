import { Animal } from "./Animal.js";

// Classe específica para gato
export class Cat extends Animal {
    public type: string = "Cat";
    private sound: string = "Miau!"
    constructor(name: string) {
        super(name, Cat.prototype.type)
    }

    public makeSound(): void {
        console.log('\x1b[32m%s\x1b[0m', `${this.name}: ${this.sound}`)
    }
}
