import { useSelector } from "react-redux"
import Card from "../Card/Card"
import style from "./CardsContainer.module.css"

const CardsContainer = () => {

    // const pokemon = [
    //     {
    //         "id": 1,
    //         "name": "bulbasaur",
    //         "img": "IMAGEN",
    //         "hp": 45,
    //         "attack": 49,
    //         "defense": 49,
    //         "speed": 45,
    //         "height": 7,
    //         "weight": 69
    //     },
    //         {
    //             "id": 2,
    //             "name": "ivysaur",
    //             "img": "IMAGEN",
    //             "hp": 60,
    //             "attack": 62,
    //             "defense": 63,
    //             "speed": 60,
    //             "height": 10,
    //             "weight": 130
    //         }
    // ]

const pokemon = useSelector(state => state.pokemon)


    return (
        <div className={style.container}>
            {pokemon.map(pokemon=> {
                return <Card
                    id={pokemon.id}
                    name={pokemon.name}
                    img={pokemon.img}
                    hp={pokemon.hp}
                    attack={pokemon.attack}
                    defense={pokemon.defense}
                    speed={pokemon.speed}
                    height={pokemon.height}
                    weight={pokemon.weight}
                />
            })}
        </div>
    )

}

export default CardsContainer