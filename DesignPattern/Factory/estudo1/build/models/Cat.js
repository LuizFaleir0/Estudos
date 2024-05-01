import { Animal } from "./Animal.js";
// Classe específica para gato
export class Cat extends Animal {
    constructor(name) {
        super(name, Cat.prototype.type);
        this.type = "Cat";
        this.sound = "Miau!";
    }
    makeSound() {
        console.log('\x1b[32m%s\x1b[0m', `${this.name}: ${this.sound}`);
    }
}
