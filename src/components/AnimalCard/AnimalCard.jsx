import "./AnimalCard.css"
import { Heart, CircleDollarSign, Zap, BicepsFlexed, Info, X } from "lucide-react"
import { useState } from "react"
import { useUserContext } from "../../context/UserContext"
import notify from "../../utils/notify"

const AnimalCard = ({ animal }) => {
    const [isFlip, setIsFlip] = useState(false)
    const {buyAnimal} = useUserContext()

    const handleBuyAnimal = () => {
        const res = buyAnimal(animal)
        if(res.status) {
            notify(res.message, "success")
        } else {
            notify(res.message, "error")
        }
    }

    return (
        <div className="animals-container">
            <div className={`animal-card ${isFlip?"flip" : ""}`}>
                <div className="animal-card__front">
                    <button className="animal-card__front-open" 
                    onClick={() => setIsFlip(true)}><Info /></button>
                <div className="animal-image">
                    <img src={animal.photo} alt={animal.name} />
                </div>

                <div className="animal-info">
                    <h3 className="animal-name">{animal.name}</h3>
                    <p className="animal-description">{animal.description}</p>

                    <div className="animal-stats">
                        <div className="stat power"><BicepsFlexed /> {animal.power}</div>
                        <div className="stat hp"><Heart /> {animal.hitpoints}</div>
                        <div className="stat stamina"><Zap /> {animal.stamina}</div>
                    </div>

                    <div className="animal-footer">
                        <span className="animal-price"><CircleDollarSign /> {animal.price}</span>
                        <button className="buy-btn" onClick={handleBuyAnimal}>Купити</button>
                        </div>
                    </div>
                </div>
                <div className="animal-card__back">
                    <button className="animal-card__back-close" 
                    onClick={() => setIsFlip(false)}><X /></button>
                    <h3>{animal.name}</h3>
                    <p>{animal.description}</p>
                </div>
            </div>
        </div>
    )
}

export default AnimalCard