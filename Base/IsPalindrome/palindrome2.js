//转换为字符串，然后转换为数组，反转，然后再转换为字符串
var isPalindrome = function(x) {
    let xStr = String(x);
    return xStr == xStr.split("").reverse().join("");
};

isPalindrome(121);
