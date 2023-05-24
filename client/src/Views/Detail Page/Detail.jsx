import React from "react";
import useGetPokemonById from "../../hooks/useGetPokemonById";
import style from "./detail.module.css";
import pokebolalogo from "../../images/pokebolalogo.png";
import { useDispatch } from "react-redux";
import { deletedPokemon } from "../../redux/actions";
import { useHistory} from "react-router-dom";

const Detail = () => {
    const pokemonData = useGetPokemonById();
    const pokemon = pokemonData[0];
    const dispatch = useDispatch();
    const navigate = useHistory();
    const handlerDelete = () => {
        dispatch(deletedPokemon(pokemon.id));
        navigate.push("/home");
        
    }

    return (
        <div>
            {pokemon ? (
                <>
                    <div className={style.detail}>
                        <h2>{pokemon.name.toUpperCase()}</h2>
                        <img src={pokemon.img} alt="" />
                        <p>
                            <strong>HP: {pokemon.hp}</strong>
                        </p>
                        <p>
                            <strong>ATTACK: {pokemon.attack}</strong>
                        </p>
                        <p>
                            <strong>DEFENSE: {pokemon.defense}</strong>
                        </p>
                        {pokemon.speed && <p><strong>SPEED: {pokemon.speed}</strong></p>}
                        {pokemon.height && <p><strong>HEIGHT: {pokemon.height}</strong></p>}
                        {pokemon.weight && <p><strong>WEIGHT: {pokemon.weight}</strong></p>}
                        <div style={{ marginBottom: "20px" }}>
                            <strong>TYPES: {pokemon.types.map((v) => v.name).join(' / ')}</strong>
                        </div>
                    </div>
                </>
            ) : (
                <div className={style.loadingSpinner}>
                    <img src={pokebolalogo} alt="Pokeball Logo" className={style.imgSmall} />
                </div>
            )}
            {
                typeof pokemon?.id === "string" ? (
                    <button
                        onClick={handlerDelete}
                        className={style.btnDelete}
                    >
                        Delete
                    </button>
                ) : null
            }
        </div>
    );
};

export default Detail;
