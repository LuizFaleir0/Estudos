import { Animal } from "./Animal.js";

// Classe específica para cachorro
export class Dog extends Animal {
    public type: string = "Dog";
    private sound: string = "Au au!"
    constructor(name: string) {
        super(name, Dog.prototype.type)
    }

    makeSound(): void {
        console.log('\x1b[32m%s\x1b[0m', `${this.name}: ${this.sound}`)
    }
}