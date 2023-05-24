const { Pokemon } = require("../db");
const { Types } = require("../db")
const {
    getPokesApi,
    getPokesDB,
    getAllPokes,
    loadingPokesDB
} = require("../utils/utils");



const allPokemons = async (req, res) => {
    let { name } = req.query;

    try {
        if (name) {
            const apiPokes = await getAllPokes() //funcion asincrona qyue devuelve los pokemons
            const chosenPoke = apiPokes.filter(  //buscamos el Pokémon con el nombre que se especifica en name, 
                (p) => p.name.toLowerCase() === name.toLowerCase()//utilizando toLowerCase para comparar los nombres en minúsculas y eliminar diferencias de capitalización.
            )
            if (chosenPoke) { // comprobamos si tenemos un valor y si es asi...
                return res.status(200).json(chosenPoke) // devolvemos el pokemon encontrado en un JSON
            }
            return res.status(404).send("No pokemon found")
        } else {
            const allPokemons = await getAllPokes()
            return res.status(200).json(allPokemons)
            //Si name no tiene ningún valor, esta línea llama a la función getAllPokes() para obtener la lista completa de Pokémon 
            //y devuelve una respuesta HTTP con un código de estado 200 y un objeto JSON que contiene todos los Pokémon.
        }
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}

const pokeId = async (req, res) => {
    const { id } = req.params
    try {
        const allPokemons = await getAllPokes()
        if (id) {
            const pokeFilters = allPokemons.filter(
                (p) => p.id == id)
            if (pokeFilters.length) {
                return res.json(pokeFilters)
            }
        }
    } catch (error) {
        res.status(404).send("There is no pokemon with that id")
    }
}

const createPokemon = async (req, res) => {
    try {
        const { name, img, hp, attack, defense, speed, height, weight, types } = req.body;
        if (!name) {
            return res.status(404).send("Name not found");
        }
        const newPokemons = await Pokemon.create({
            name: name,
            hp: hp,
            attack: attack,
            defense: defense,
            speed: speed ? speed : null,
            height: height ? height : null,
            weight: weight ? weight : null,
            img: img,
        });

        let typesDB = await Types.findAll({
            where: {
                name: types.length > 0 ? types : ['unknown'],
            },
        });

        await newPokemons.addTypes(typesDB);

        res.status(200).json("Pokemon Created");

    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}

const deletePokemon = async (req, res) => {
    const { id } = req.params;
    try {
        await Pokemon.destroy({
            where: {
                id: id
            }
        });
        const allPokemons = await getAllPokes()
        return res.status(200).json(allPokemons);
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}

const updatePokemon = async (req, res) => {
    let { id } = req.params;
    let { name, hp, attack, defense, speed, height, weight, img } = req.body;
    try {
        let find = await Pokemon.findOne({ where: { id: id } })
        if (find) {

            await Pokemon.update({
                name: name ? name : find.name,
                hp: hp ? hp : find.hp,
                attack: attack ? attack : find.attack,
                defense: defense ? defense : find.defense,
                speed: speed ? speed : find.speed,
                height: height ? height : find.height,
                weight: weight ? weight : find.weight,
                img: img ? img : find.img,
            }, { where: { id: id } })

            return res.send({ msg: "Updated successfully" });
        }
        res.send({ msg: "This Pokemon doen't exist" });

    } catch (err) {
        console.log("This be the message", err.message)
        res.send({ msg: err.message })
    }
}

module.exports = {
    updatePokemon,
    allPokemons,
    pokeId,
    createPokemon,
    deletePokemon
}