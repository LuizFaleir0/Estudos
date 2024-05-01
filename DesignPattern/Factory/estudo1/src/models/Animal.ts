import { IAnimal } from "../interfaces/IAnimal.js";

// Classe base para animal
export class Animal implements IAnimal {
    public type: string;
    public name: string;

    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }

    public makeSound(): void {
        console.log("Nome do animal: som do animal");
    }
}