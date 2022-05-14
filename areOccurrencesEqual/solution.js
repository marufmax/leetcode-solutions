// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/

/**
 * First solution came to my mind. 
 * Time complexity: O(n)
 * Space: O(n)
 * 
 * @param {string} s
 * @return {boolean}
 */
function areOccurrencesEqual(string) {
    let charMap = {};

    for (const character of string) {
        charMap[character] = charMap[character] + 1 || 1;
    }

    return new Set(Object.values(occurrences)).size === 1;
}

/**
 * This is I grab from discussion, seems faster. 
 * Its basically compare with max occurance
 * 
 * @param {*} string 
 * @returns 
 */
function areOccurrencesEqual(string) {
    let charMap = {};

    let max = 0;
    for (const char of string) {

        if(!charMap[char]) charMap[char] = 0;
        charMap[char]++;
        max = Math.max(max, charMap[char]);
    }

    return !Object.values(charMap).some(elm => elm !== max);
}

/**
 * without help of any built in functions 
 * Double loop, kinda slower than others
 * 
 * @param {*} string 
 * @returns 
 */
 function areOccurrencesEqual(string) {
    let charMap = {};

    for (let i = 0; i < string.length; i++){
        charMap[string[i]] = charMap[string[i]] + 1 || 1; 
    } 

    for (const key in charMap) {
        if(charMap[key] !== charMap[string[0]]) return false;
    }

    return true;
}

console.log(areOccurrencesEqual('abacbc'));
console.log(areOccurrencesEqual('aaabb'));