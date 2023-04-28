//manejo la loica del get(byId) para la ruta country, guardo la info de la BD => aqui se genera la comunicacion con los models
const {Country, Activity} = require('../../db');
const {countryIdValidate} = require('../../validations/countryIdValidate')

const getCountryById = async (id) => {
    const countryId = countryIdValidate(id);

    const country = await Country.findByPk(countryId, 
        {include: {
            model: Activity,
            attributes: ['name', 'difficulty', 'duration', 'season']
        }
    });

    if(!country) throw new Error (`Country with Id ${id} not found`);
    
    return country;
};  

module.exports = {
    getCountryById
}