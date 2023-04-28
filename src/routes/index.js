//instacio Router, modularizo las rutas, este es archivo que contiene todos los ruteos 
const { Router } = require('express');
const {countriesRouter} = require('./countriesRouter');
const {activitiesRouter} = require('./activitiesRouter')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countriesRouter);
router.use('/activities', activitiesRouter);


module.exports = router;
