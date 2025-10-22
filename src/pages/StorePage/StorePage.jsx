import "./StorePage.css"
import AnimalList from "../../components/AnimalList/AnimalList"
import { useUserContext } from "../../context/UserContext"
import notify from "../../utils/notify"

const StorePage = ({ platformAnimals }) => {
    const { buyAnimal } = useUserContext()

    const handleBuyAnimal = (animal) => {
        const res = buyAnimal(animal)
        if (res.status) {
            notify(res.message, "success")
        } else {
            notify(res.message, "error")
        }
    }

    return (
        <main>
            <section className="store__animals">
                <div className="container">
                    <h1>Магазин</h1>
                    <AnimalList animals={platformAnimals} onAction={handleBuyAnimal} actionBtnText={"Купити"} />
                </div>
            </section>
        </main>
    )
}

export default StorePage 