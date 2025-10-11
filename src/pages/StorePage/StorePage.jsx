import "./StorePage.css"
import AnimalList from "../../components/AnimalList/AnimalList"

const StorePage = ({ platformAnimals }) => {

    return (
        <main>
            <section className="store__animals">
                <div className="container">
                    <h1>Магазин</h1>
                <AnimalList animals={platformAnimals} />
                </div>
            </section>
        </main>
    )
}

export default StorePage 