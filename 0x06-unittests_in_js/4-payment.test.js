const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');
const chai = require('chai');
const { expect } = chai;
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    let stub;
    let consoleSpy;

    beforeEach(() => {
        stub = sinon.stub(Utils, 'calculateNumber');
        consoleSpy = sinon.spy(console, 'log');
        stub.withArgs('SUM', 100, 20).returns(10);
    });

    afterEach(() => {
        consoleSpy.restore();
        stub.restore();
    });

    it('should call stub and return 10 and output The total is: 10', () => {
        const result = sendPaymentRequestToApi(100, 20);
        expect(stub.calledOnce).to.be.true;
        expect(stub.calledWith('SUM', 100, 20)).to.be.true;
        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    });
});
