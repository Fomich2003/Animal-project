import aiConfig from "../config/ai-config";

class StablehordeService {
    constructor() {
        this.url = "https://stablehorde.fomka.online"
        this.model = aiConfig.stablehorde.model
        this.requestId = null
    }

    // "A cute cartoon cat with blue scales, fluffy wings, and a friendly smile, sitting on a pile of golden coins, cartoonish style, vibrant colors"

    async generateImage(prompt) {
        try {
            const res = await fetch(this.url + "/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    prompt: prompt
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

    async getImage(id) {
        try {
            const res = await fetch(`${this.url}/status?id=${id}`)

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Server error");
            }

            const data = await res.json();

            console.log(data)

            return data;

        } catch (error) {
            console.error("Stablehorde service", error.message);
            throw error;
        }
    }

    async getImageLink(prompt) {
        try {
            const resGenPhoto = await this.generateImage(prompt)
            // while + atempts   цикл + спроби
            let resImageLink = { status: "pending" }
            let attempt = 0

            while (resImageLink && resImageLink.status === "pending" && attempt < 10) {
                await new Promise(res => setTimeout(res, 2000));
                attempt++
                resImageLink = await this.getImage(resGenPhoto.id)
            }
            if (resImageLink.status !== "done") throw new Error("Тварина не згенерувалася... Спробуйте пізніше!")
            return this.url + resImageLink.url
        } catch (error) {
            throw error
        }
    }
}


const stablehordeService = new StablehordeService()

export default stablehordeService