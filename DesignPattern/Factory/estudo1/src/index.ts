import { AnimalFactory } from "./factories/AnimalFactory.js";

/**
 * Inicia o processo de criação de um animal.
 * 
 * Esta função utiliza a fábrica de animais para criar um animal baseado nas respostas do usuário
 * Após a criação, ela exibe informações sobre o animal selecinado e faz o animal emitir um som.
 * 
 * @async
 * @returns { Promise<void> } Retorna uma Promise que resolve sem valor quando o processo de criação do animal é concluído.
 */
async function start(): Promise<void> {
    try {
        // Cria um animal
        const animal = await AnimalFactory.createAnimal()

        // Informa os dados do animal
        console.log('\x1b[33m%s\x1b[0m', `Animal escolhido: ${animal._type}`)
        console.log('\x1b[33m%s\x1b[0m', `O nome dele é: ${animal._name}`)

        // Animal emite som
        animal.makeSound()
    } catch (error: any) {
        console.error(error.message)
    }
}

start()
