const repeatString = function(word, repeats) {
    let repeatedString = word;
    for (let i = 0; i < repeats-1; i++) {
        repeatedString = repeatedString + word;
    }
    
    if (repeats == 0) {
        return ''
    } else if (repeats < 0) {
        return 'ERROR'
    } else {
    return repeatedString
    }
};

// Do not edit below this line
module.exports = repeatString;
