// https://leetcode.com/problems/contains-duplicate/


// Brute force
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 const containsDuplicate = (nums) => {
    let currentItem = [];
    for (const num of nums) {
        if(currentItem.includes(num)) {
            return true;
        }
        currentItem.push(num);
    }

    return false;
};


console.log(containsDuplicate([1,2,3,1]), true);
console.log(containsDuplicate([1,2,3,4]), false);