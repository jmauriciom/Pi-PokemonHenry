const { Router } = require('express');

// Importar todos los routers;
const pokemonRoutes = require('./pokemonRoutes');
const typeRoutes = require('./typeRoutes');

// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemon', pokemonRoutes);
router.use('/type', typeRoutes);


module.exports = router;
