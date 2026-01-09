import animalsConfig from "../config/animals-config";

class AnimalsService {
    constructor() {
        this.url = animalsConfig.apiUrl
    }

    async getAllAnimals() {
        return await this._smartFetch({ path: "animals" })
    }

    async getAnimalById(id) {
        return await this._smartFetch({ path: `animals/${id}` })
    }

    async getAnimalsForShop() {
        return await this._smartFetch({ path: `animals?owner=платформа` })
    }

    async changeAnimalOwner(id, newOwner) {
        return await this._smartFetch({ bodyMethod: "PUT", path: `animals/${id}`, bodyData: { owner: newOwner } })
    }

    async createAnimal(animal) {
        return await this._smartFetch({ bodyMethod: "POST", path: `animals`, bodyData: animal })
    }

    async _smartFetch({ bodyMethod, path, bodyData }) {
        try {
            const res = await fetch(this.url + path, {
                headers: { 'content-type': 'application/json' },
                ...(bodyData && { body: JSON.stringify(bodyData) } || {}),
                ...(bodyMethod && { method: bodyMethod } || {})
            })
            if (!res.ok) throw new Error("Api server error")
            const data = await res.json()
            return { data, status: true }
        } catch (error) {
            console.log(error.message)
            return { status: false, message: error.message }
        }
    }
}

const animalsService = new AnimalsService()


export default animalsService