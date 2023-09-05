/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let numMap = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
        'IV' : 4,
        'IX' : 9,
        'XL' : 40,
        'XC' : 90,
        'CD' : 400,
        'CM' : 900,
    };
    let sum = 0;
    for (let i = 0; i < s.length; i++ ) {
        let str = s[i] + s[i+1];
        if (numMap[str]) {
            sum += numMap[str];
            i++;
        }
        else {
            sum += numMap[s[i]];
        }
    }
    return sum;
};

console.log(romanToInt('IV'))