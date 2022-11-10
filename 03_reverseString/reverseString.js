const reverseString = function(string) {
    let stringArray;
    let reverseString = '';
    stringArray = string.split('');
    let Arraysize = stringArray.length;
    for (let i = 0; i < Arraysize; i++) {
        reverseString = reverseString + stringArray.pop();
    }
    return reverseString
};

// Do not edit below this line
module.exports = reverseString;
