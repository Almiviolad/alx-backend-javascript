const chai = require('chai');
const {expect} = chai;
const request = require('request');

describe('Index page', () => {
    it('should return Welcome to the payment system', (done) => {
        request('http://localhost:7865', (error, response, body) => {
            expect(body).to.equal('Welcome to the payment system');
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});
