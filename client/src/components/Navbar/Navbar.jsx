import { Link } from "react-router-dom"
import style from "./Navbar.module.css"
import logopokemon from "../../images/logopokemon.png"

const Navbar = () => {
    return (

        <nav className={style.mainContainer}>
        <div>
            <img src={logopokemon} alt="Pokemon Logo" className={style.imgSmall} />
        </div>

        <button>
            <Link to="/home" className={style.link}>HOME</Link>
        </button>
            <button>
                <Link to="/Form" className={style.link}>CREATE YOUR POKEMON</Link>
            </button>
        
            
        </nav>
    )
}

export default Navbar