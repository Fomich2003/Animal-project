import "./Menu.css"
import { House, Store, Handbag} from "lucide-react"
import { Link } from "react-router-dom"

const Menu = () => {


    return (
        <nav className="menu">
            <div className="container">
                <div className="menu__wrapper">
                    <Link to="/" className="menu-icon">
                        <House />
                    </Link>
                    <Link to="/store" className="menu-icon">
                        <Store />
                    </Link>
                    <Link to="/inventory" className="menu-icon">
                        <Handbag />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Menu