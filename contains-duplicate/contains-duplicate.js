// https://leetcode.com/problems/contains-duplicate/
/************ Notes/ Edge cases
 *  1. What if empty array
 *  2. Negetive number? 
 *  3. What if array contains single element?
 * 
 */


// Brute force
/**
 * @param {number[]} nums
 * @return {boolean}
 */
//  const containsDuplicate = (nums) => {
//     let currentItem = [];
//     for (const num of nums) {
//         if(currentItem.includes(num)) {
//             return true;
//         }
//         currentItem.push(num);
//     }

//     return false;
// };





/**
 * HasMap solution
 * @param {number[]} nums
 * @return {boolean}
 */
 function containsDuplicate(nums) {
    const dupArr = {};
    for (const num of nums) {
        if(dupArr[num] === undefined) {
            dupArr[num] = num
        } else {
            return true;
        }
    }

    return false;
};

/**
 * Set Solution
 * @param {number[]} nums
 * @return {boolean}
 */
 function containsDuplicate (nums) {
    const dupArr = {};
    for (const num of nums) {
        if(dupArr[num] === undefined) {
            dupArr[num] = num
        } else {
            return true;
        }
    }

    return false;
};

//containsDuplicate([1,2,3,1])
console.log(containsDuplicate([1,2,3,1]), true);
console.log(containsDuplicate([1,2,3,4]), false);