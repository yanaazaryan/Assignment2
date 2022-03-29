const citiesRepository = require('../cities/cities.repository')
const chai = require('chai');
const sinon = require('sinon');

const stub = sinon.stub(citiesRepository, 'getCityDataByZipCode');
citiesRepository.getCityDataByZipCode('https://api.zippopotam.us/us/90001');
describe("Testing getCityDataByZipCode to call axios get exactly one and with correct parameter", function(){
    stub.calledOnceWith('https://api.zippopotam.us/us/90001');
})
