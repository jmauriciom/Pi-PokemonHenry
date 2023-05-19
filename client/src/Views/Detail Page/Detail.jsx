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
                        <p>name: {pokemon.name}</p>
                        <img src={pokemon.img} alt="" />
                        <p>hp: {pokemon.hp}</p>
                        <p>attack: {pokemon.attack}</p>
                        <p>defense: {pokemon.defense}</p>
                        <p>speed: {pokemon.speed}</p>
                        <p>height: {pokemon.height}</p>
                        <p>weight: {pokemon.weight}</p>
                        <div>
                            {/* types: {pokemon.types.map((v) => v.name).join(' / ')} */}
                            types: {pokemon.types.map((v, index) => (
                                <p key={index} className={style[`type-${v.name}`]}>{v.name}</p>
                            ))}
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