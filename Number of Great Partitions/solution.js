/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPartitions = function(nums, k) {
    let count = 0;
    let dfs = function(start, sum, k) {
    if (k === 1) {
        if (sum === 0) count++;
            return;
        }
        for (let i = start; i < nums.length; i++) {
            dfs(i + 1, sum - nums[i], k - 1);
        }
    }
    dfs(0, nums.reduce((acc, curr) => acc + curr), k);
    return count;
};