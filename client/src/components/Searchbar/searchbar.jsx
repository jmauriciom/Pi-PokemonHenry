import React from "react";
import useGetPokemonByName from "../../hooks/useGetPokemonByName"; 



const SearchBar = () => {

    const [pokemon , handlerInputChange ] = useGetPokemonByName();
    
    const handlePokemonSelection = (e) => {
        handlerInputChange(e);
    }




    return (
        <div>
            <input type="text" placeholder="Search Pokemon" value={pokemon} onChange={handlePokemonSelection} />
        </div>
    )
}


export default SearchBar