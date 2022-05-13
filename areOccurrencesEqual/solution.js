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
    let occurrences = {};

    for (const character of string) {

        if(occurrences[character] !== undefined) {
            occurrences[character] += 1;
        } else {
            occurrences[character] = 1;
        }
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

console.log(areOccurrencesEqual('abacbc'));
console.log(areOccurrencesEqual('aaabb'));