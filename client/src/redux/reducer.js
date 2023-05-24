import {
    GET_POKEMONS,
    GET_POKEMONID,
    GET_POKEMON_NAME,
    GET_TYPES,
    FILTER_TYPE,
    FILTER_BY_DB,
    FILTER_BY_API,
    ORDER_BY_ATTACK,
    ORDER_BY_NAME,
    DELETE_POKEMON,
    CLEAN_DETAIL,
    SEARCH_POKEMONS,
    RESET_POKEMONS,
    POST_POKEMON,
} from "./actions"


const initialState = {
    pokemon: [],
    pokemonDetail: [],
    pokemonFilter: [], // no se modifica
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
            let filterType = action.payload === "all" ?
                [...state.pokemonFilter] :
                [...state.pokemonFilter].filter(t => t.types?.some(e => e.name === action.payload))
            return {
                ...state,
                pokemon: filterType

            };
        
        case FILTER_BY_DB:
            
            return {
                ...state,
                pokemon: action.payload,
            };

        case FILTER_BY_API:
            return {
                ...state,
                pokemon: action.payload,
            };

        case ORDER_BY_ATTACK:
            const orderAttack =
                action.payload === "asc"
                    ? state.pokemon.slice().sort((a, b) => {
                        return b.attack - a.attack;
                    })
                    : state.pokemon.slice().sort((a, b) => {
                        return a.attack - b.attack;
                    });
            return {
                ...state,
                pokemon: orderAttack,
            };

        case ORDER_BY_NAME:
            const orderName =
                action.payload === "asc"
                    ? state.pokemon.slice().sort((a, b) => {
                        let first = a.name.toLowerCase();
                        let second = b.name.toLowerCase();
                        if (first > second) return 1;
                        if (first < second) return -1;
                        return 0;
                    })
                    : state.pokemon.slice().sort((a, b) => {
                        let first = a.name.toLowerCase();
                        let second = b.name.toLowerCase();
                        if (first > second) return -1;
                        if (first < second) return 1;
                        return 0;
                    });
            return {
                ...state,
                pokemon: orderName,
            }
        case DELETE_POKEMON:
            return {
                ...state,
                pokemon: action.payload,
                pokemonFilter: action.payload
            }
        case SEARCH_POKEMONS:
            let pokemonFounded = action.payload.length > 0 ? action.payload : [...state.pokemonFilter]
            return {
                ...state,
                pokemon: pokemonFounded
            }
        case RESET_POKEMONS:
            return {
                ...state,
                pokemon: action.payload
            }
        case POST_POKEMON:
            return {
                ...state,
                pokemon: [action.payload, ...state.pokemon]
            }
        default:
            return { ...state }
    }
}

export default rootReducer