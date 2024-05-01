// Classe base para animal
export class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    makeSound() {
        console.log("Nome do animal: som do animal");
    }
}
