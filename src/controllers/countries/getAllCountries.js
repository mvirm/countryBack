//manejo la loica del get(all) para la ruta country, guardo la info de la BD => aqui se genera la comunicacion con los models
const {Country} = require('../../db');

const getAllCountries = async() => await Country.findAll();
 

module.exports ={
    getAllCountries
}