import aiConfig from "../config/ai-config";

class StablehordeService {
    constructor() {
        this.url = aiConfig.stablehorde.apiUrl
        this.key = aiConfig.stablehorde.apiKey
        this.model = aiConfig.stablehorde.model
        this.requestId = null
    }

    // "A cute cartoon cat with blue scales, fluffy wings, and a friendly smile, sitting on a pile of golden coins, cartoonish style, vibrant colors"

    async generateImage(prompt) {
        try {
            const res = await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    apikey: this.key
                },
                body: JSON.stringify(
                    {
                        prompt: prompt,
                        params: {
                            height: 512,
                            width: 512,
                            steps: 25,
                            sampler_name: "k_euler_a"
                        },
                        models: this.model,
                        nsfw: false
                    }

                )
            })

            if (!res.ok) throw new Error("Server error")

            const data = await res.json()

            if (!data.id) throw new Error("Id is not defined")

            return data

        } catch (error) {
            console.log("Stablehorde service", error.message)
        }
    }

    async getImage() {
        try {

        } catch (error) {

        }
    }
}


const stablehordeService = new StablehordeService()

export default stablehordeService