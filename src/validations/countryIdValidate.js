//valido que el ID pasado por parametro sea correcto ylo paso a mayusculas; callback utilizado en el controller getCountryById
const countryIdValidate =  (id) => {
    if(!id) throw new Error ('Missing countryId')
    if(!isNaN(id)) throw new Error('The countryId must not be a number');
    if(id.length !== 3) throw new Error('the countryId must have three characters');
    
    return id.toUpperCase();   
}

module.exports = {
    countryIdValidate
}