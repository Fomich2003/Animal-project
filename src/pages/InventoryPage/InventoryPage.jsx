import "./InventoryPage.css"
import AnimalList from "../../components/AnimalList/AnimalList"
import notify from "../../utils/notify"
import { useUserContext } from "../../context/UserContext"

const InventoryPage = () => {
    const { userAnimals, sellAnimal } = useUserContext()

    const handleSellAnimal = (animal) => {
        const res = sellAnimal(animal)
        if (res.status) {
            notify(res.message, "success")
        } else {
            notify(res.message, "error")
        }
    }


    return (
        <main>
            <section className="inventory__animals">
                <div className="container">
                    <h1>Інвентар</h1>
                    <AnimalList animals={userAnimals} onAction={handleSellAnimal} actionBtnText={"Продати"}/>
                </div>
            </section>
        </main>
    )
}

export default InventoryPage 