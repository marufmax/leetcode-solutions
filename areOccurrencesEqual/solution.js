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
