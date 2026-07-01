const removeFromArray = function(arr, ...remove) {
    let args = arr.filter(item => !remove.includes(item));
    return args
};

// Do not edit below this line
module.exports = removeFromArray;
