import { QuestionCollection } from "inquirer"
import { QuestionAnimalType } from "../interfaces/IAnimal.js"

export const QAnimalType: QuestionAnimalType = {
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
