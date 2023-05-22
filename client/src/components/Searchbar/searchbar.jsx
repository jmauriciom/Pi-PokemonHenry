import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemon } from "../../redux/actions";

const Searchbar = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
        dispatch(searchPokemon(value)); // Disparar la acción de búsqueda en el estado global
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Buscar Pokémon..."
                value={searchTerm}
                onChange={handleSearch}
            />
        </div>
    );
};

export default Searchbar