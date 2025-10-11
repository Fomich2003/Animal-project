import "./AnimalCard.css"
import { Heart, CircleDollarSign, Zap, BicepsFlexed } from "lucide-react"

const AnimalCard = ({ animal }) => {
    return (
        <div class="animals-container">
            <div className="animal-card">
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
                        <button className="buy-btn">Купити</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimalCard