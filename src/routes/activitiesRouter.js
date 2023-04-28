//instacion Router, desvio las rutas get y post de activity a la carpeta handlers
const {Router} = require('express');
const { postActivityHandler, getActivitiesHandler } = require('../handlers/activitiesHandlers');


const activitiesRouter = Router();

activitiesRouter.post('/', postActivityHandler)

activitiesRouter.get('/',  getActivitiesHandler)

module.exports = {
    activitiesRouter
}