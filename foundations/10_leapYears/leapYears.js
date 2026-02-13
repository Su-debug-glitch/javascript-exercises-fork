const leapYears = function(year) {
    let isLeap = false;

    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return isLeap = true;
    } else {
        return isLeap;
    }
};
/*
console.log(leapYears(2026))
console.log(leapYears(3010))
console.log(leapYears(2028))
console.log(leapYears(700))
*/
// Do not edit below this line
module.exports = leapYears;
