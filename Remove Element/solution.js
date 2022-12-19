/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (nums.length === 0) return 0; // if array is empty, return 0
    let i = 0; // i is the index of the current element
    for (let j = 0; j < nums.length; j++) { // j is the index of the next element
        if (nums[j] !== val) { // if the current element is not the same as the next element
        nums[i] = nums[j]; // set the current element to the next element
        i++; // increment i
        } // end if
    } // end for
    return i; // return the index of the last element
};