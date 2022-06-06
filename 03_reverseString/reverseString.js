const reverseString = function(str) {
    let separate = str.split("");
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += separate[i];
    }
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
