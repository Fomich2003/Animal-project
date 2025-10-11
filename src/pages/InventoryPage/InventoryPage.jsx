import "./InventoryPage.css"
import AnimalList from "../../components/AnimalList/AnimalList"

const InventoryPage = () => {

    return (
        <main>
     <h1>Inventory</h1>
     <p>Hello Roma</p>
     <AnimalList animals={[]} />
        </main>
    )
}

export default InventoryPage 