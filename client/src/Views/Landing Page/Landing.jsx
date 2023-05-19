import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div>
            <Link to="/home">
                <div>BIENVENIDO AL MUNDO POKEMON, HAZ CLICK PARA ENTRAR!</div>
            </Link>
        </div>
    );

}

export default Landing