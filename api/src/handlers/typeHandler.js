const { loadingPokesDB} = require("../utils/utils")
const { Types } = require("../db")

const getType = async (req, res) => {
    await loadingPokesDB()
    try {
        const findTypes = await Types.findAll()
        res.send(
            findTypes.map((t) => {
                return {
                    id: t.id,
                    name: t.name,
                }
            })
        )
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}

module.exports = {
    getType
}