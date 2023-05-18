import { Link } from "react-router-dom"
import style from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={style.mainContainer}>
        
        
        <button>
            <Link to="/home">HOME</Link>
        </button>
            <button>
                <Link to="/Form">CREATE YOUR POKEMON</Link>
            </button>
            
        </nav>
    )
}

export default Navbar