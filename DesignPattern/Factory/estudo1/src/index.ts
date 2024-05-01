import { AnimalFactory } from "./factories/AnimalFactory.js";

async function start() {
    try {
        // Abre questinamente para adicionar Animal
        const animal = await AnimalFactory.createAnimal()
        console.log('\x1b[33m%s\x1b[0m', `Animal escolhido: ${animal.type}`)
        console.log('\x1b[33m%s\x1b[0m', `O nome dele é: ${animal.name}`)

        // Animal faz som
        animal.makeSound()
    } catch (error: any) {
        console.error(error.message)
    }
}

start()
