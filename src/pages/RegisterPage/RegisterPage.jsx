import "./RegisterPage.css"
import { useState } from "react"
import Animal from "../../service/animal"
import stablehordeService from "../../service/stablehorde-service"
import animalsService from "../../service/animals-service"
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext"

function RegisterPage() {
    const [ownerName, setOwnerName] = useState("")
    const [animalName, setAnimalName] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(null)
    const { setUser, setUserAnimals } = useUserContext()
    const navigate = useNavigate()

    const createAccount = (e) => {
        e.preventDefault()
        setIsLoading(true)
        const animal = new Animal(animalName, ownerName)

        stablehordeService.getImageLink(animal.promptTemplate).then(url => {
            animal.photo = url
            return animal
        }).then(animal => {
            return animalsService.createAnimal(animal)
        }).then(result => {
            if (!result.status) throw new Error("При зберіганні тваринки відбулась помилка!")
            const newUser = {
                id: Date.now(),
                nick: result.data.owner,
                balance: 100,
                myAnimals: [result.data]
            }
            setUser(newUser)
            setUserAnimals(newUser.myAnimals)
            localStorage.setItem("user", JSON.stringify(newUser))
            navigate("/inventory")
        }).catch(er => {
            setIsError(er.message)
        }).finally(() => {
            setIsLoading(false)
        })
    }


    return (
        <main className="registerMain">
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
                            {isError && <p style={{ color: "red" }}>{isError}</p>}
                            <button disabled={isLoading}>{isLoading ? <img width={200} height={200} src="/icons/Loader.png" alt="Loading..." /> : "Створити акаунт"}</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default RegisterPage