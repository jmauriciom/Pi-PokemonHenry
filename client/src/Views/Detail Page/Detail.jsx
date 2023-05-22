import useGetPokemonById from "../../hooks/useGetPokemonById";
import style from "./detail.module.css"
import pokebolalogo from "../../images/pokebolalogo.png"



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
                        <h2>{(pokemon.name).toUpperCase()}</h2>
                        <img src={pokemon.img} alt="" />
                        <p><strong>HP: {pokemon.hp}</strong></p>
                        <p><strong>ATTACK: {pokemon.attack}</strong></p>
                        <p><strong>DEFENSE: {pokemon.defense}</strong></p>
                        {pokemon.speed && <p><strong>SPEED: {pokemon.speed}</strong></p>}
                        {pokemon.height && <p><strong>HEIGHT: {pokemon.height}</strong></p>}
                        {pokemon.weight && <p><strong>WEIGHT: {pokemon.weight}</strong></p>}
                        <div style={{marginBottom: "20px"}}>
                        <strong>TYPES: {pokemon.types.map((v) => v.name).join(' / ')}</strong>
                        </div>
                        </div>
                    </>
                    :
                    <div className={style.loadingSpinner}>
                    <img src={pokebolalogo} alt="Pokeball Logo" className={style.imgSmall} />
                    </div>
            }
        </div>
    );
}

export default Detail