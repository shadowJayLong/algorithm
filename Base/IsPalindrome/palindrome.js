/**
 * @param {number} x
 * @return {boolean}
 */
//转换为字符串
 var isPalindrome = function(x) {
    let xStr = String(x);
    let len = xStr.length;
    let forLen = len % 2 !== 0 ? (len - 1) / 2 : len / 2;
    for (let i = 0 ; i < forLen; i++) {
        if (xStr[i] !== xStr[len - i - 1]) {
            return false;
        }
    }
    return true;
};

isPalindrome(121);
