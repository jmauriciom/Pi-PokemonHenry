const axios = require("axios");
const { Pokemon, Types } = require("../db");

const getPokesApi = async () => {
    try {
        let pokeData = [];
        //primera peticion a la api para traer los 60 primeros pokemones
        const pokeApi = await axios.get(
            "https://pokeapi.co/api/v2/pokemon?offset=0&limit=60"
        );

        //segunda peticion para traer los datos de cada pokemon
        let pokeInfo = pokeApi.data.results.map((p) => axios.get(p.url)); // propiedad que tiene cada pokemon!

        //tercera peticion para traer los datos de cada pokemon que necesitamos
        let pokeResults = axios.all(pokeInfo).then((poke) => {
            poke.map((p) => {
                pokeData.push({
                    id: p.data.id,
                    name: p.data.name,
                    hp: p.data.stats[0].base_stat,
                    attack: p.data.stats[1].base_stat,
                    defense: p.data.stats[2].base_stat,
                    speed: p.data.stats[5].base_stat,
                    height: p.data.height,
                    weight: p.data.weight,
                    types: p.data.types.map((t) => ({name:t.type.name})),
                    img: p.data.sprites.other.home.front_default,
                });
            });
            return pokeData;
        });
        return pokeResults;
    } catch (error) {
        console.log(error);
    }
};

//traigo los pokemons de la db
const getPokesDB = async () => {
    const pokesDB = await Pokemon.findAll({
        include: Types,
    });
    return pokesDB;
};

//traigo todos los pokemons API Y BDD
const getAllPokes = async () => {
    const pokeApi = await getPokesApi();
    const pokeDB = await getPokesDB();
    const allPokes = [...pokeApi, ...pokeDB];
    return allPokes;
};

//carga los tipos de pokemons en la db
const loadingPokesDB = async () => {
    try {
        let pokeArray = [];
        await axios
            .get("https://pokeapi.co/api/v2/type")
            .then((pokeTypes) =>
                pokeTypes.data.results.map((t) => pokeArray.push({ name: t.name }))
            );
        const pokeTypes = await Types.findAll();
        if (pokeTypes.length === 0) {
            await Types.bulkCreate(pokeArray);
        }
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    getPokesApi,
    getPokesDB,
    getAllPokes,
    loadingPokesDB,
};