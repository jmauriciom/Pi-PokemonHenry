import useGetPokemonById from "../../hooks/useGetPokemonById";
import style from "./detail.module.css"



const Detail = () => {
    const pokemonData = useGetPokemonById();
    const pokemon = pokemonData[0]
    console.log(pokemon);
    return (
        <div >
            {
                pokemon ?
                    <>
                    <div className={style.detail}>
                        <h2>{pokemon.name}</h2>
                        <img src={pokemon.img} alt="" />
                        <p><strong>HP: {pokemon.hp}</strong></p>
                        <p><strong>ATTACK: {pokemon.attack}</strong></p>
                        <p><strong>DEFENSE: {pokemon.defense}</strong></p>
                        <p><strong>SPEED: {pokemon.speed}</strong></p>
                        <p><strong>HEIGHT: {pokemon.height}</strong></p>
                        <p><strong>WEIGHT: {pokemon.weight}</strong></p>
                        <div style={{marginBottom: "20px"}}>
                        <strong>TYPES: {pokemon.types.map((v) => v.name).join(' / ')}</strong>
                        </div>
                        </div>
                    </>
                    :
                    <div className={style.loadingSpinner}>
                    </div>
            }
        </div>
    );
}

export default Detail