
const sumAll = function (val1, val2) {
    if (val1 < 0 || val2 < 0) return "ERROR";
    if (!Number.isInteger(val1) || !Number.isInteger(val2)) return "ERROR";

    let sum = 0;
    for (let i = Math.min(val1, val2); i <= Math.max(val1, val2); i++) {
        sum += i;
    }
    return sum;
};

sumAll(123, 1);

// Do not edit below this line
module.exports = sumAll;
