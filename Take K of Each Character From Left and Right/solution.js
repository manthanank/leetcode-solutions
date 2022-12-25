/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function(s, k) {
    let left = "";
    let right = "";
    for (let i = 0; i < s.length; i++) {
        if (i < k) {
            left += s[i];
        } else if (i >= s.length - k) {
            right = s[i] + right;
        }
    }
    return left + right;
};