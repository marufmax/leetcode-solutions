// https://leetcode.com/problems/missing-number/
/***
 * Questions
 * 1. Empty array
 * 2. Negetive numner?
 * 3. Range always start from zero
 * 4. Is there only one missing number always?
 */


/**
 * This is the worst solution I came across, its not fast but memory efficient
 * Time: O(2n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
 function missingNumber (nums) {
    range = []

    // generating range using for loop
    for (let index = 0; index <= nums.length; index++) {
        range[index] = index;
    }

    return range.filter(value => nums.indexOf(value) === -1)[0];
}

/**
 * Same implementation as avobe but instead of for loop using Array.from
 */
function missingNumber (nums) {
    // generating range using for Array.from()
    return Array.from(Array(nums.length + 1).keys()).filter(value => nums.indexOf(value) === -1)[0]
}


/**
 * Math solution, this is the optimal solution
 * 
 * Time: O(n)
 * Space: O(1)
 * @param {*} nums 
 */
 function missingNumber(nums) {
    let sum = 0;
    const maxValue = nums.length;

    // sum all number in array
    // ex: nums = 0, 1, 3 ==> 0 + 1 + 4 => 4
    for (let i = 0; i < maxValue; i++) {
        sum += nums[i]
    }

    // sum of total max value
    return (maxValue * (maxValue + 1)/2 - sum);
}


console.log(missingNumber([3,0,1]))
// console.log(missingNumber([0,1]))