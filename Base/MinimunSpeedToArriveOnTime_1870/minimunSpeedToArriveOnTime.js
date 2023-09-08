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
    let getTime = (i) => {
        let totalTime = 0;
        dist.forEach((val, index) => {
            let time = val / i;
            if (index == dist.length - 1) {

            } else {
                time = Math.ceil(time);
            }
            totalTime += time
        })
        return totalTime;
    }

    let binarySearch = (left, right) => {
        return Math.ceil((left + right) / 2);
    }
    let left = 1;
    let right = Math.pow(10, 7);
    let i = binarySearch(left, right);
    let time;
    let lastTime = 0;

    let getSpeed = (lastIndex) => {
        time = getTime(i);
        if (time <= hour) {
            if (time < lastTime) {
                console.log(time, lastTime)
                return lastIndex;
            } else if (time == lastTime) {
                return i;
            } else {
                lastTime = time;
                right = i;
                i = binarySearch(left, right);
                if (right == 2) i = 1;
                return getSpeed(right);
            }
        } else {
            left = i;
            i = binarySearch(left, right);
            return getSpeed(left);
        }
    }
    return getSpeed(i);
};

console.log(minSpeedOnTime([1,3,2], 6))


//题解
