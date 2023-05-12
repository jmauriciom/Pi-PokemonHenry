const { Router } = require("express");
const { allPokemons, pokeId, createPokemon, deletePokemon, updatePokemon} = require("../handlers/pokemonHandler")

const pokemonRoutes = Router();

pokemonRoutes.get("/", allPokemons)

pokemonRoutes.get("/:id", pokeId)

pokemonRoutes.post("/", createPokemon)

pokemonRoutes.delete("/:id", deletePokemon)

pokemonRoutes.put("/:id", updatePokemon)

module.exports = pokemonRoutes;