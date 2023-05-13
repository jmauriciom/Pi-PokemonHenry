import { Link } from "react-router-dom"
import style from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={style.mainContainer}>
            <Link to="/home">Home</Link>
            <Link to="/Form">Form</Link>
        </div>
    )
}

export default Navbar