const {expect} = require('chai');
const calcNum = require('./2-calcul_chai.js')

describe('calculateNumber function', () => {
    it('adds two whole numbers', () => {
        expect(calcNum('SUM',7, 3)).to.equal(10);
    });
    it('adds two decimal  numbers', () => {
        expect(calcNum('SUM',3.6, 5.5)).to.equal(10);
    });
    it('adds two decimal numbers and rounds first number', () => {
        expect(calcNum('SUM',6.3, 3.8)).to.equal(10);
    });
    it('adds two decimal number and rounds the second num', () => {
        expect(calcNum('SUM',7.8, 2.2)).to.equal(10);
    });
    it('case of additiin one decimal and one whole number', () => {
        expect(calcNum('SUM',7.1, 3)).to.equal(10);
    });
    it('case of one decimal and whole number 2', () => {
        expect(calcNum('SUM',7, 3.1)).to.equal(10);
    });
    it('case of addition of two zeros', () => {
        expect(calcNum('SUM',0, 0.0)).to.equal(0);
    });
    it('case of addition of  2  negative numbers', () => {
        expect(calcNum('SUM',-7.4, -3)).to.equal(-10);
    });

    /* subtraction test*/
    it('subtract two whole numbers', () => {
        expect(calcNum('SUBTRACT',7, 3)).to.equal(4);
    });
    it('subtract two decimal  numbers', () => {
        expect(calcNum('SUBTRACT',3.6, 5.5)).to.equal(-2);
    });
    it('subtract two decimal numbers and rounds first number', () => {
        expect(calcNum('SUBTRACT',6.3, 3.8)).to.equal(2);
    });
    it('subtract  two decimal number and rounds the second num', () => {
        expect(calcNum('SUBTRACT',7.8, 2.2)).to.equal(6);
    });
    it('case of subtraction of  one decimal and one whole number', () => {
        expect(calcNum('SUBTRACT',7.1, 3)).to.equal(4);
    });
    it('case of one decimal and whole number 2', () => {
        expect(calcNum('SUBTRACT',7, 3.1)).to.equal(4);
    });
    it('case ofsubtraction of two zeros', () => {
        expect(calcNum('SUBTRACT',0, 0.0)).to.equal(0);
    });
    it('case of subtraction of  2  negative numbers', () => {
        expect(calcNum('SUBTRACT',-7.4, -3)).to.equal(-4);
    });

    /*Division tests*/
    it('divides  two whole numbers', () => {
        expect(calcNum('DIVIDE', 9, 3)).to.equal(3);
    });
    it('divides two decimal  numbers', () => {
        expect(calcNum('DIVIDE',6.6, 1.1)).to.equal(7);
    });
    it('Divides two decimal numbers and rounds first number', () => {
        expect(calcNum('DIVIDE',6.3, 2.8)).to.equal(2);
    });
    it('divides two decimal number and rounds the second num', () => {
        expect(calcNum('DIVIDE',7.8, 2.2)).to.equal(4);
    });
    it('case of division one decimal and one whole number', () => {
        expect(calcNum('DIVIDE',7.1, 1)).to.equal(7);
    });
    it('case of one decimal and whole number 2', () => {
        expect(calcNum('DIVIDE',7, 7.1)).to.equal(1);
    });
    it('case of zero division', () => {
        expect(calcNum('DIVIDE',10, 0)).to.equal('Error');
    });
    it('case of division of  2  negative numbers', () => {
        expect(calcNum('DIVIDE',-8.8, -3)).to.equal(3);
    });
    it('case of zero numerator', () => {
        expect(calcNum('DIVIDE', 0, 3)).to.equal(0);
    });
});
