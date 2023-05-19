import React from "react";
import useGetPokemonByName from "../../hooks/useGetPokemonByName"; 
import style from "./searchbar.module.css"



const SearchBar = () => {

    const [pokemon , handlerInputChange ] = useGetPokemonByName();
    
    const handlePokemonSelection = (e) => {
        handlerInputChange(e);
    }




    return (
        <div>
            <input type="text" placeholder="Search Pokemon" value={pokemon} className={style.redondeado} onChange={handlePokemonSelection} />
        </div>
    )
}


export default SearchBar