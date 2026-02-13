const removeFromArray = function(arr, ...elementsToRemove) {
    let newArray = arr.filter(item => !elementsToRemove.includes(item));
    return newArray;
};
/*
let array = [1,2,3,4];
console.log(removeFromArray(array, 3, 4));

let array2 = [1,2,2,3,4];
console.log(removeFromArray(array2, 2, 7, "tacos"));

console.log(removeFromArray(array, 1, 2, 3, 4));

let array3 = [1,2,3, "hey"];
console.log(removeFromArray(array3, 1, "he", "3"));
*/

// Do not edit below this line
module.exports = removeFromArray;
