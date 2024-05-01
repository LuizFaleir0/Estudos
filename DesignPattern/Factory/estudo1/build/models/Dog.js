import { Animal } from "./Animal.js";
// Classe específica para cachorro
export class Dog extends Animal {
    constructor(name) {
        super(name, Dog.prototype.type);
        this.type = "Dog";
        this.sound = "Au au!";
    }
    makeSound() {
        console.log('\x1b[32m%s\x1b[0m', `${this.name}: ${this.sound}`);
    }
}
