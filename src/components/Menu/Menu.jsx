import "./Menu.css"
import { House, Store, Handbag} from "lucide-react"


const Menu = () => {


    return (
        <nav className="menu">
            <div className="container">
                <div className="menu__wrapper">
                    <a href="/" className="menu-icon">
                        <House />
                    </a>
                    <a href="/store" className="menu-icon">
                        <Store />
                    </a>
                    <a href="/inventory" className="menu-icon">
                        <Handbag />
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Menu