const { Router } = require("express");
const { getType } = require("../handlers/typeHandler");

const typeRoutes = Router();

typeRoutes.get("/", getType)

module.exports = typeRoutes;