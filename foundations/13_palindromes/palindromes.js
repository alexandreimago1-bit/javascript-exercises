const palindromes = function (str) {
 let cleanedStr = str.replace(/[^\w]/g, "").toLowerCase()
 let reversedStr = cleanedStr.split('').reverse().join('')
 return cleanedStr === reversedStr
};

// Do not edit below this line
module.exports = palindromes;
