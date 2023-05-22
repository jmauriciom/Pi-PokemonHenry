const axios = require("axios");
const { Pokemon, Types } = require("../db");

const getPokesApi = async () => {
  try {
    // Realiza una solicitud GET a la API de Pokémon para obtener los primeros 150 pokémones
    const pokeApi = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=150"
    );

    // Extrae las URL de cada pokémon de la respuesta de la API
    const pokeUrls = pokeApi.data.results.map((p) => p.url);

    // Realiza varias solicitudes concurrentes para obtener los datos de cada pokémon
    const pokeResponses = await Promise.all(pokeUrls.map(axios.get));

    // Procesa cada respuesta para extraer la información relevante de cada pokémon
    const pokeData = pokeResponses.map(({ data }) => {
      const { id, name, stats, height, weight, types, sprites } = data;
      return {
        id,
        name,
        hp: stats[0].base_stat,
        attack: stats[1].base_stat,
        defense: stats[2].base_stat,
        speed: stats[5].base_stat,
        height,
        weight,
        types: types.map((t) => ({ name: t.type.name })),
        img: sprites.other.home.front_default,
      };
    });

    // Devuelve los datos de los pokémones obtenidos
    return pokeData;
  } catch (error) {
    console.log(error);
    throw error;
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