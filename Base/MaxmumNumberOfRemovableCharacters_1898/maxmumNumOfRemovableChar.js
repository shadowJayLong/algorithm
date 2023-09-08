/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
var maximumRemovals = function(s, p, removable) {
    let check = (k) => {
        // let resultStr = '';
        let removeMap = [];
        for (let i = 0; i < k; i++) {
            let index = removable[i];
            removeMap[index] = 1;
        }
        // for (let i = 0; i < s.length; i++) {
        //     if (!removeMap[i]) {
        //         resultStr += s[i];
        //     }
        // }
        // console.log(resultStr, k)
        let index = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === p[index] && !removeMap[i]) {
                index++;
            }
            if (index == p.length) {
                return true;
            }
        }
        return false
    }

    if (!check(1)) return 0;

    let left = 1, right = removable.length;
    while (left < right) {
        let mid = (left + right + 1) >> 1;
        if (check(mid)) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    return left;
};

console.log(maximumRemovals("qlevcvgzfpryiqlwy", "qlecfqlw", [12,5]))
