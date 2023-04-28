//manejo las respuestas de los querys a la ruta activity
const {getAllActivities} = require('../controllers/activities/getActivities')
const {createActivity} = require('../controllers/activities/postActivity');

const postActivityHandler = async (req, res) => {
    const{name, difficulty, duration, season, countryId} = req.body;
    
    try {
        if(!name || !difficulty || !duration || !season || !countryId) throw new Error('Missing Data');
        const newActivity = await createActivity(name, difficulty, duration, season, countryId);
        res.status(201).json(newActivity)    
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}; 

const getActivitiesHandler = async (req, res) => {
    try {
        const activities = await getAllActivities();
        res.status(200).json(activities)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    postActivityHandler,
    getActivitiesHandler
}