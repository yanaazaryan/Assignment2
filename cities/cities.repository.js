const axios = require('axios');

module.exports = {
    async getCityDataByZipCode(zip) {
        const result = await axios.get(`https://api.zippopotam.us/us/${zip}`)
        return result['data'];
    }
}

