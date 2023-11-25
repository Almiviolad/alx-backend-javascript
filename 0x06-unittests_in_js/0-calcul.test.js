assert = require('assert');
const add = require("./0-calcul.js")

describe("add function", () => {
    it('whole numbers shoild add correctly', () => {
        assert.strictEqual(add(1, 3),4);
    });
    it('case of one whole number and one decimal', () => {
        assert.strictEqual(add(1, 3.7), 5);
    });
    it('case of two decimals', () => {
        assert.strictEqual(add(1.2, 3.7), 5);
    });
    it('case of two zeros', () => {
        assert.strictEqual(add(0, 0), 0);
    });
    it('case of more than 1 decimal place', () => {
        assert.strictEqual(add(2.567894, 3), 6);
    });
});
