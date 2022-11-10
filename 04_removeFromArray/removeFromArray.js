const removeFromArray = function(array, ...args) {
    let filteredArray = array.filter(num => !args.includes(num)); 
    return filteredArray;
};


// Do not edit below this line
module.exports = removeFromArray;
