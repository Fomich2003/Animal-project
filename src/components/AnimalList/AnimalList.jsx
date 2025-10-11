import "./AnimalList.css"
import AnimalCard from "../AnimalCard/AnimalCard"

const AnimalList = ({ animals }) => {



    return (
        <div className="animal__list">
            {
                animals.map((animal, index) => <AnimalCard key={index} animal={animal} />)
            }
        </div>
    )
}


export default AnimalList