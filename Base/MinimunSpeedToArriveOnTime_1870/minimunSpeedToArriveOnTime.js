/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
//dist[1,3,2]
//hour6
//dist[1,3,2]
//hour2.7
// dist = [1,3,2], hour = 1.9
//[1,1,100000] 2.01  10000000

var minSpeedOnTime = function(dist, hour) {
    let len = dist.length;
    if (len - 1 >= hour) {
        return -1;
    }
    let sum = dist.reduce((sum, item) => {return sum + item}) / hour
    return Math.ceil(sum)
};

console.log(minSpeedOnTime([1,3,2], 1.9))