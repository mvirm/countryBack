//manejo las respuestas de los querys a la ruta activity
const {getCountryById} = require('../controllers/countries/getCountryById');
const {getAllCountries} = require('../controllers/countries/getAllCountries');
const {getCountriesByName} = require('../controllers/countries/getCountriesByName');

const getCountriesHandler = async (req, res) => {
    const {name} = req.query
    try {
       const countries = name ? await getCountriesByName(name) : await getAllCountries();
       res.status(200).json(countries) 
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

const getCountryHandler = async (req, res) => {
    const {id} = req.params;
    try {
        if(!id) throw new Error('Missing ID');
        const country = await getCountryById(id);
        res.status(200).json(country); 
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getCountriesHandler,
    getCountryHandler
}