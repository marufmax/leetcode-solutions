// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

/**
 * This is slowest solution, it gets time limit exceed
 * 
 * Time: O(n^2)
 * Space: O(n)
 * @param {number[]} nums
 * @return {number[]}
 */
 function findDisappearedNumbers(nums) {
     const maxLength = nums.length
     const allNumbers = Array.from({length: maxLength}, (_, i) => i + 1)

     return allNumbers.filter(value => !nums.includes(value))

}

console.log(findDisappearedNumbers([8,3,2,7,4,2,3,1]))