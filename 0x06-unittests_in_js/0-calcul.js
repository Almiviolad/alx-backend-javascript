function calculateNumber(type, a, b) {
    /*round a and b and return the result of mat opertion done on the tow numbers*/
    a = Math.round(a);
    b = Math.round(b);
    if (type === 'SUM') {
        return (a + b);
    }
    else if (type === 'SUBTRACT') {
        return (a - b);
    }
    else if (type === 'DIVIDE') {
        if (b === 0) {
            return "Error";
        }
        return (a / b);
    }
}
module.exports = calculateNumber;
