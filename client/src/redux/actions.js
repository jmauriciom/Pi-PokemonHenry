import axios from 'axios';

export const GET_POKEMONS = 'GET_POKEMONS'
export const GET_POKEMONID = 'GET_POKEMON'
export const GET_POKEMON_NAME = 'GET_POKEMON_NAME'
export const GET_TYPES = 'GET_TYPES'
export const FILTER_TYPE = 'FILTER_TYPE'
export const FILTER_TYPE_TWO = 'FILTER_TYPE_TWO'
export const FILTER_BY_DB = 'FILTER_BY_DB'
export const FILTER_BY_API = 'FILTER_BY_API'
export const ORDER_BY_ATTACK = 'ORDER_BY_ATTACK'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const DELETE_POKEMON = 'DELETE_POKEMON'
export const CLEAN_DETAIL = 'CLEAN_DETAIL'
export const SEARCH_POKEMONS = 'SEARCH_POKEMONS'
export const RESET_POKEMONS = 'RESET_POKEMONS'
export const POST_POKEMON = 'POST_POKEMON'


/*********************************************************************************************************************/
export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL,
    }
}
export const getPokemons = () => {
    return async function (dispatch) {
        const apiData = await axios.get('http://localhost:3001/pokemon')
        const pokemons = apiData.data
        dispatch({ type: GET_POKEMONS, payload: pokemons })
    }
}
export const getPokemonId = (id) => {
    return async function (dispatch) {
        const apiData = await fetch(`http://localhost:3001/pokemon/${id}`);
        const pokemon = await apiData.json()
        dispatch({ type: GET_POKEMONID, payload: pokemon });
    };
};
export const getPokemonName = (name) => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/pokemon?name=${name}`)
        const pokemon = apiData.data.name
        dispatch({ type: GET_POKEMON_NAME, payload: pokemon })
    }
}
export const getTypes = () => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/type`)
        const type = apiData.data
        dispatch({ type: GET_TYPES, payload: type })
    }
}
export const filterType = (type) => {
    return {
        type: 'FILTER_TYPE',
        payload: type
    }
}
export const filterTypeTwo = (firstType, secondType) => {
    return {
        type: 'FILTER_TYPE_TWO',
        payload: { firstType, secondType }
    }
}
export const filterByApi = () => {
    return {
        type: 'FILTER_BY_API',
    }
}
export const filterByDb = () => {
    return {
        type: 'FILTER_BY_DB',
        payload: {}
    }
}
export const filterByAttack = (method) => {
    return {
        type: ORDER_BY_ATTACK,
        payload: method
    }
}
export const filterByName = (method) => {
    return {
        type: ORDER_BY_NAME,
        payload: method,
    };
};
export const deletedPokemon = (id) => {
    return async function (dispatch) {
        const apiData = await axios.delete(`http://localhost:3001/pokemons/${id}`);
        const pokemon = apiData.data
        dispatch({ type: DELETE_POKEMON, payload: pokemon });
    }
}
export const searchPokemon = (name) => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/pokemon?name=${name}`)
        const pokemon = apiData.data
        dispatch({ type: SEARCH_POKEMONS, payload: pokemon})
    }
} //poner catch para el error?
export function resetPokemons () {
    return {
        type: RESET_POKEMONS,
        payload: []
    }
}
export const postPokemon = (pokemon) => {
    return async function (dispatch) {
        const apiData = await axios.post('http://localhost:3001/pokemon', pokemon)
        const poke = apiData.data
        dispatch({
            type: POST_POKEMON,
            payload: poke
        })
    }
}
