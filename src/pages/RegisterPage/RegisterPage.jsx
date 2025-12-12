import "./RegisterPage.css"
import { useState } from "react"
import Animal from "../../service/animal"
import stablehordeService from "../../service/stablehorde-service"

function RegisterPage() {
    const [ownerName, setOwnerName] = useState("")
    const [animalName, setAnimalName] = useState("")

    const createAccount = (e) => {
        e.preventDefault()
        const animal = new Animal(animalName, ownerName)
        console.log(animal)
        const prompt = "A cute cartoon cat with blue scales, fluffy wings, and a friendly smile, sitting on a pile of golden coins, cartoonish style, vibrant colors"
        stablehordeService.generateImage(prompt).then(res => {
            console.log(res)
        })
    }


    return (
        <main>
            <section className="register">
                <div className="container">
                    <div className="register__wrapper">
                        <h1>Animals NFT</h1>
                        <p>Зареєструйся і отримай свою унікальну тварину</p>
                        <form onSubmit={createAccount}>
                            <input
                                minLength={3}
                                type="text"
                                placeholder="Ім'я користувача"
                                value={ownerName}
                                onChange={(e) => setOwnerName(e.target.value)}
                                required
                            />
                            <input
                                minLength={3}
                                type="text"
                                placeholder="Введіть ім'я свого улюбленця"
                                value={animalName}
                                onChange={(e) => setAnimalName(e.target.value)}
                                required
                            />
                            <button>Створити акаунт</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default RegisterPage