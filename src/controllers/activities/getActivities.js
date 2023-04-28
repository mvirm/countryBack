//manejo la loica del get para la ruta activity, traigo la info de la BD => aqui se genera la comunicacion con los models
const {Activity, Country} = require('../../db');

const getAllActivities = async () => {
    const filterd = await Activity.findAll(
       { order: [
                ['name'],
            ],
        include: {
            model: Country,
            attributes: ['id', 'name', 'flagImg', 'continent', 'population']
         }
        }
    );
    if(!filterd.length) throw new Error('There are no Tourist Activities to show');
    return filterd
}
module.exports = {
    getAllActivities
}