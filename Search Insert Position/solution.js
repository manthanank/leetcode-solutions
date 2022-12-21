/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0; // Declare a variable called low
    let high = nums.length -1;  // Declare a variable called high
    while (low <= high){    // Loop while low is less than or equal to high
        let mid = Math.floor((low + high) / 2); // Declare a variable called mid
        if (nums[mid] == target){   // If the mid element is equal to target
            return mid; // Return the mid element
        }   // End if
        else if (nums[mid] < target){   // If the mid element is less than target
            low = mid + 1;  // Set low to mid + 1
        }   // End if
        else{   // If the mid element is greater than target
            high = mid - 1; // Set high to mid - 1
        }   // End if
    }   // End while
    return low; // Return low if not found
};  // End function