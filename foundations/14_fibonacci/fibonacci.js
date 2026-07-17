const fibonacci = function(num) {
    let converted = parseInt(num)
if (converted === 0){
    return 0
}else if (converted < 0){
    return "OOPS"
}else{
    let prev = 1
    let curr = 1
    for (let i = 1; i < converted - 1; i++){
        let newNum = prev + curr;
         prev = curr;
         curr = newNum;
    }
    return curr;
}

};

// Do not edit below this line
module.exports = fibonacci;
