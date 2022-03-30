const NotFoundError = require('../errors/not-found.error');
const citiesRepository= require('./cities.repository');

module.exports = {
    async getCityByZipCode(zip) {
        const city = await citiesRepository.getCityDataByZipCode(zip);
        if (Object.keys(city).length !== 0) {
            const result = city['places'][0]['place name'] + ", " + city['places'][0]['state abbreviation'] + ", " + city['country'];
            return result;
        }
        throw new NotFoundError(`No cities found!`);
    }
}
