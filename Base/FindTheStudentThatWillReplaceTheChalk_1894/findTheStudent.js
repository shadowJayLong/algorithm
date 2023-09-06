/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    let sum = 0;
    let preSum = [];
    chalk.forEach((val, index) => {
        sum += val;
        preSum[index] = sum;
    })
    let result = k % sum;
    let left = 0, right = chalk.length;
    while(left < right) {
        let mid = (left + right) >> 1;
        if (preSum[mid] <= result) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
    // let sum2 = 0;
    // for (let i = 0; i < chalk.length; i++) {
    //     sum2 += chalk[i];
    //     if (result < sum2) {
    //         return i;
    //     }
    // }
}

console.log(chalkReplacer([5,1,5], 22))
console.log(chalkReplacer([3,4,1,2], 25))