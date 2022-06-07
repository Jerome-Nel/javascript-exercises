const sumAll = function(start, end) {
    // check if value is a valid integer
    if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
    // check if value is negative
    if (start < 0 || end < 0) return "ERROR";
    // swap value if start is greater than end
    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
