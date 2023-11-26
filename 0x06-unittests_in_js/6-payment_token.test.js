const chai = require('chai');
const { expect } = chai;
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', () => {
    it('should fetch data from api async', (done) => {
        getPaymentTokenFromAPI(true).then((data) => {
            expect(data).to.deep.equal({data: 'Successful response from the API' });
            done();
        }).catch((error) => {
            done(error);
        });
    });
})
        
