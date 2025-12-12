import animalsConfig from "../config/animals-config";
import { generateRandomNumber } from "../utils/helpers";

// {
//     "photo": "https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg",
//     "name": "Громолев",
//     "description": "Могутній хищник з пронизливим ревом, здатний оглушити ворогів на відстані до 3 км. Володіє неймовірною силою та швидкістю у стрибках.",
//     "power": 85,
//     "hitpoints": 90,
//     "stamina": 75,
//     "price": 85,
//     "owner": "платформа"
// }

class Animal {
    constructor(personalAnimalName, ownerName) {
        this.name = this.generateName(personalAnimalName)
        this.description = this.generateDescription(personalAnimalName)
        this.power = this.generateStat("power")
        this.hitpoints = this.generateStat("hitpoints")
        this.stamina = this.generateStat("stamina")
        this.price = this.calculatePrice()
        this.owner = this.createUnicOwnerName(ownerName)
    }

    generateName(personalName) {
        const { firstNames, lastNames } = animalsConfig
        const firstName = firstNames[generateRandomNumber(0, firstNames.length - 1)]
        const lastName = lastNames[generateRandomNumber(0, firstNames.length - 1)]
        return `${firstName} ${lastName} (${personalName})`
    }

    generateDescription(personalName) {
        const { descTemplates } = animalsConfig
        const template = descTemplates[generateRandomNumber(0, descTemplates.length - 1)]
        return template.replace("{{name}}", personalName)
    }

    generateStat(stat) {
        const { rangePower, rangeStamina, rangeHitpoints } = animalsConfig

        if (stat === "power") return generateRandomNumber(rangePower[0], rangePower[1])
        if (stat === "stamina") return generateRandomNumber(rangeStamina[0], rangeStamina[1])
        if (stat === "hitpoints") return generateRandomNumber(rangeHitpoints[0], rangeHitpoints[1])

        return 0
    }

    calculatePrice() {
        return Math.floor((this.power + this.hitpoints + this.stamina) / 3)
    }

    createUnicOwnerName(ownerName) {
        return `${ownerName}-${Date.now()}-${generateRandomNumber(1000, 9999)}`
    }
}

export default Animal