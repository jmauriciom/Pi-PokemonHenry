import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div>
            <Link to="/home">
                <div>Estas en Landing, haz click en "HOME" para ir a la página principal</div>
            </Link>
        </div>
    );

}

export default Landing