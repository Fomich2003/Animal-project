import aiConfig from "../config/ai-config";

class StablehordeService {
    constructor() {
        this.url = "/api/stablehorde-api"
        this.model = aiConfig.stablehorde.model
        this.requestId = null
    }

    // "A cute cartoon cat with blue scales, fluffy wings, and a friendly smile, sitting on a pile of golden coins, cartoonish style, vibrant colors"

    async generateImage(prompt) {
        try {
            const res = await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    prompt: prompt,
                    params: {
                        height: 512,
                        width: 512,
                        steps: 25,
                        sampler_name: "k_euler_a"
                    },
                    models: [this.model], // models - це масив!
                    nsfw: false
                })
            })

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Server error");
            }

            const data = await res.json();

            if (!data.id) throw new Error("Id is not defined");

            return data;

        } catch (error) {
            console.error("Stablehorde service", error.message);
            throw error;
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