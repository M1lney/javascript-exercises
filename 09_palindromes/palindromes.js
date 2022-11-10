const palindromes = function (words) {
    const charArray = words.split(""); 
    const areletters = charArray.filter(letter => {
        return (letter.toUpperCase() != letter.toLowerCase()); 
    }); 
    for (let i = 0; i < areletters.length; i++) {
        areletters[i] = areletters[i].toLowerCase();
    }
    const fowardStringJoined =  areletters.join("");
    const reverse = areletters.reverse();
    const reverseStringJoined = reverse.join("");
    if (reverseStringJoined === fowardStringJoined) {
        return true;
    } else {
        return false;
    } 

};
// Do not edit below this line
module.exports = palindromes;
