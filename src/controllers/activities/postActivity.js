//manejo la loica del post para la ruta activity, guardo la info de la BD => aqui se genera la comunicacion con los models
const {Activity} = require('../../db');

    const createActivity = async (name, difficulty, duration, season, countryId) => {

        const [activity, created] = await Activity.findOrCreate({
            where: {
                name, 
                difficulty,
                duration,
                season,    
            }
        })
        
        await activity.addCountry(countryId);   //asigno array de paises asociados 

        return activity;
    }



module.exports = {
    createActivity
}