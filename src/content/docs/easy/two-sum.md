---
title: Two Sum
description: Given an array of integers, return indices of the two numbers such that they add up to a specific target.
---

## Problem

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**Example 1**:

```plaintext
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

**Example 2**:

```plaintext
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

**Example 3**:

```plaintext
Input: nums = [3,3], target = 6
Output: [0,1]
```

**Constraints**:

- `2 <= nums.length <= 104`
- `-109 <= nums[i] <= 109`
- `-109 <= target <= 109`
- Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

## Solution in JavaScript

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
```

## Complexity Analysis

- Time complexity: O(n^2)
- Space complexity: O(1)

## Explanation

The brute force approach is simple. Loop through each element `x` and find if there is another value that equals to `target - x`. As finding another value requires looping through the rest of the array, the time complexity is O(n^2).
