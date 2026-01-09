import "./Header.css"
import { CircleDollarSign, User } from "lucide-react"

const Header = ({ user }) => {

    console.log(user)

    return (
        <header>
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__user">
                        <User />
                        <span>{user.nick.split("-")[0]}</span>
                    </div>

                    <div className="header__balance">
                        <span>{user.balance}</span>
                        <CircleDollarSign />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header