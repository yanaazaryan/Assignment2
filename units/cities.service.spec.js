const rewire = require("rewire");
rewire('../cities/cities.service')

const {getCityByZipCode} = require('../cities/cities.service.js')
const { faker } = require('@faker-js/faker');

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const  expect  = chai.expect;

chai.use(chaiAsPromised);

describe("Testing cities service", function(){
    describe("Testing function getCityByZipCode", function(){
        it("Testing normal case", function(){
            return expect(getCityByZipCode(90001)).to.eventually.deep.equal('Los Angeles, CA, United States')
        })
        it("Testing error case", function(){
            return expect(getCityByZipCode(faker.address.zipCode())).to.eventually.be.rejectedWith('Request failed with status code 404')
        })
    })
})

