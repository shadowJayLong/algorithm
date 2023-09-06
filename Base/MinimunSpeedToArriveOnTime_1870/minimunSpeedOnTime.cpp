#include<iostream>
#include<cstdio>
#include<cmath>
#include<vector>
using namespace std;

// class Solution {
// public:
//    
// };

bool arriveOnTime(vector<int>& dist, int speed, double hour) {
    double totalTime = 0.0;
    for (int i = 0; i < dist.size(); i++) {
        if (i != dist.size() - 1) {
            totalTime += ceil(dist.at(i) * 1.0 / speed);
        } else {
            totalTime += dist.at(i) * 1.0 / speed;
        }
    }
    return totalTime <= hour;
}

int minSpeedOnTime(vector<int>& dist, double hour) {
    if (dist.size() > ceil(hour)) {
        return -1;
    } 
    int left = 1;
    int right = pow(10, 7);
    while (left < right)
    {
        int mid = (left + right) >> 1;
        if (arriveOnTime(dist, mid, hour)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

int main() {
    int n[] = {1, 1, 100000};
    vector<int> dist(n, n+3);
    double hour = 2.01;
    printf("%d", minSpeedOnTime(dist, hour));
    return 0;
}