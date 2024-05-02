import type { QuestionCollection } from "inquirer"

// Perguntas para questionamento de Animais
export const QAnimalType: QuestionCollection = {
    type: 'list',
    name: "animalType",
    message: "Qual animal você deseja ter?",
    choices: [ "Cachorro", "Gato" ]
}

export const QAnimalName: QuestionCollection = {
    type: "input",
    name: "animalName",
    message: "Que nome você quer dar ao seu bichinho?",
}
