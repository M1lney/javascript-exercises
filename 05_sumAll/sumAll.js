const sumAll = function(minNumber, maxNumber) {
    let total = 0;
    let placeholder;
    if (minNumber > maxNumber) {
        placeholder = minNumber;
        minNumber = maxNumber;
        maxNumber = placeholder;
    }
    if (minNumber < 0 || maxNumber < 0) {
        return 'ERROR'
    }

    if (!Number.isInteger(minNumber) || !Number.isInteger(maxNumber)) {
        return 'ERROR'
    }

    for (let i = minNumber; i<= maxNumber; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
