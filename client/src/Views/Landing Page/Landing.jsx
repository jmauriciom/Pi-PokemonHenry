import { Link } from "react-router-dom";
import pokebolalogo from "../../images/pokebolalogo.png"
import style from "./Landing.module.css"

const Landing = () => {
    return (
    
<div className={style.landing}>
  <div className={style.welcome}>Welcome to the world of Pokémon, click on the pokeball to enter!</div>

  <Link to="/home" className={style.Link}>
    <img src={pokebolalogo} alt="Pokeball Logo" className={style.imgSmall} />
  </Link>
</div>
    )

}

export default Landing