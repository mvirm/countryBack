//manejo la loica del get(byName) para la ruta country, guardo la info de la BD => aqui se genera la comunicacion con los models
const {Country} = require('../../db')
const {Op} = require('sequelize');

const getCountriesByName = async (name) => {
    const filtered = await Country.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            }
        }
    })
    if(!filtered.length) throw new Error('There are no countries that match the search');
    return filtered;
};

module.exports = {
    getCountriesByName
}