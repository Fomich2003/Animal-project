import "./AnimalList.css"
import AnimalCard from "../AnimalCard/AnimalCard"

const AnimalList = ({ animals, onAction, actionBtnText }) => {



    return (
        <div className="animal__list">
            {
                animals.map((animal, index) => <AnimalCard key={index} animal={animal} onAction={onAction} actionBtnText={actionBtnText} />)
            }
        </div>
    )
}


export default AnimalList