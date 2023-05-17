import {
    GET_POKEMONS,
    GET_POKEMONID,
    GET_POKEMON_NAME,
    GET_TYPES,
    FILTER_TYPE,
    FILTER_TYPE_TWO,
    FILTER_BY_DB,
    FILTER_BY_API,
    ORDER_BY_ATTACK,
    ORDER_BY_NAME,
    DELETE_POKEMON,
    CLEAN_DETAIL
} from "./actions"


const initialState = {
    pokemon: [],
    pokemonDetail: [],
    pokemonFilter: [],
    infoType: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemon: action.payload,
                pokemonFilter: action.payload
            }
        case GET_POKEMONID:
            return {
                ...state, pokemonDetail: action.payload
            }
            case CLEAN_DETAIL:
                return {
                    ...state,
                    pokemonDetail: []
                }
        case GET_TYPES:
            return {
                ...state, infoType: action.payload
            }
        case GET_POKEMON_NAME:
            const filteredPokemon = state.pokemon.filter((p) => p.name === action.payload)
            return {
                ...state, pokemonFilter: filteredPokemon.length > 0 ? filteredPokemon : []
            }
        case FILTER_TYPE:
            return {
                ...state,
                pokemonFilter: state.pokemon.filter((p) => p.types.includes(action.payload))
            }
        case FILTER_TYPE_TWO:
            const { firsType, secondType } = action.payload
            const filteredPokemonsType = state.pokemon.filter((p) =>
                p.types.includes(firsType) || p.types.includes(secondType))
            return {
                ...state,
                pokemonFilter: filteredPokemonsType
            }
        case FILTER_BY_DB:
            return {
                ...state,
                pokemonFilter: state.pokemon.filter((p) => typeof p.id === 'string')
            }
        case FILTER_BY_API:
            return {
                ...state,
                pokemonFilter: state.pokemon.filter((p) => typeof p.id === 'number')
            }
        case ORDER_BY_ATTACK:
            const orderAttack =
                action.payload === 'asc' ? state.pokemonFilter.sort((a, b) => a.attack - b.attack) :
                    state.pokemonFilter.sort((a, b) => b.attack - a.attack)
            return {
                ...state,
                pokemonFilter: orderAttack
            }
        case ORDER_BY_NAME:
            const orderName =
                action.payload === 'asc' ? state.pokemonFilter.slice().sort((a, b) => {
                    let first = a.name.toLowerCase()
                    let second = b.name.toLowerCase()
                    if (first > second) return 1
                    if (first < second) return -1
                    return 0
                })
                    : state.pokemonFilter.slice().sort((a, b) => {
                        let first = a.name.toLowerCase()
                        let second = b.name.toLowerCase()
                        if (first > second) return -1
                        if (first < second) return 1
                        return 0
                    })
            return {
                ...state,
                pokemonFilter: orderName
            }
        case DELETE_POKEMON:
            return {
                ...state,
                pokemon: action.payload,
                pokemonFilter: action.payload
            }
        default:
            return { ...state }
    }
}

export default rootReducer