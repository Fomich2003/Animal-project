const aiConfig = {
    stablehorde: {
        apiUrl: "https://stablehorde.net/api/v2/generate/",
        apiKey: import.meta.env.STABLEHORDE_SECRET_KEY,
        model: ['526Mix-Animated']
    }
}

export default aiConfig