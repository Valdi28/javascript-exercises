const sumAll = function (a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR"
    }

    if (a < 0 || b < 0) {
        return "ERROR"
    }

    let largestNumber;
    let smallestNumber;

    if (a > b) {
        largestNumber = a;
        smallestNumber = b
    } else {
        largestNumber = b;
        smallestNumber = a;
    }


    let total = 0;
    for (let i = smallestNumber; i <= largestNumber; i++) {
        total += i;
    }

    return total;
};


// Do not edit below this line
module.exports = sumAll;
