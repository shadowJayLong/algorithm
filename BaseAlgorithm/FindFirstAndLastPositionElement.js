/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//直接遍历
var searchRange = function(nums, target) {
    let result = [-1,-1];
    nums.forEach((item, i) => {
        if (item == target && result[0] == -1) {
            result[0] = i;
        }
        if (item == target) {
            result[1] = i;
        }
    })
    return result;
};

//二分查找
let searchRange = function(nums, target) {
    let result = [-1, 1];
    let left = 0, right = nums.length;
    while(left < right) {
        const mid = (left + right) >> 1;
    }
}