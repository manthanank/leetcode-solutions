/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0; // if array is empty, return 0
    let i = 0; // i is the index of the current element
    for (let j = 1; j < nums.length; j++) { // j is the index of the next element
        if (nums[i] !== nums[j]) { // if the current element is not the same as the next element
        i++; // increment i
        nums[i] = nums[j]; // set the current element to the next element
        } // end if
    } // end for
    return i + 1; // return the index of the last element
}; // end removeDuplicates