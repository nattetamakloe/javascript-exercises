const leapYears = function (year) {
    let statement = false;
    if (year % 4 == 0) statement = true;
    return statement;
};

// Do not edit below this line
module.exports = leapYears;
