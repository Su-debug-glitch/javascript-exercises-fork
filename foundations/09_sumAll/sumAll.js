const sumAll = function(num1, num2) {
    let suma = 0;

    if((num1 < 0 || num2 < 0) || 
    (isNaN(num1) || isNaN(num2)) || 
    (!Number.isInteger(num1) || !Number.isInteger(num2)) ||
    (!typeof(num1) === "number" || !typeof(num2) === "number")) {
        return "ERROR";
    }

    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);

    return suma = ((max - min + 1) * (min + max)) / 2;
};
/*
console.log(sumAll(1, 4));
console.log(sumAll("1", 10));
console.log(sumAll(677, 9));
console.log(sumAll(10.5, 100));
console.log(sumAll([1,2], 9));
*/

// Do not edit below this line
module.exports = sumAll;
