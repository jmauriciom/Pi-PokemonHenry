import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemon } from "../redux/actions";

const useGetPokemonByName = () => {
    const dispatch = useDispatch();
    const [pokemon, setPokemon] = useState("");

    const handlerInputChange = (e) => {
        setPokemon(e.target.value);
    }

    useEffect(() => {
        dispatch(searchPokemon(pokemon));
    }, [dispatch, pokemon]);
    return [pokemon, handlerInputChange];

}

export default useGetPokemonByName;