//llama a la Api y guarda la info en la BD cuando se levanta el server
const axios = require('axios');
const {Country} = require('../db');


const URL = 'https://restcountries.com/v3/all';

const getDataApi = async () => {
    try {
        const response = await axios.get(URL);
        const data = response.data.map(c => {
            return {
                id: c.cca3,
                name: c.name.common,
                flagImg: c.flags[1],
                continent: c.continents[0],
                capital: c.capital !== undefined ? c.capital[0] : 'Capital not found',
                subregion: c.subregion,
                area: c.area,
                population: c.population
            }
        });

        await Country.bulkCreate(data);
        console.log('Countries saved in DB');
        
    } catch (error) {
        console.log(error, 'could not get the data');
    }
};

module.exports = {
    getDataApi
}