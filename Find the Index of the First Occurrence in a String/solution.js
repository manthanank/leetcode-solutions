/**
 * @param {string} digits
 * @return {string[]}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0;
    if (haystack.length < needle.length) return -1;
    let i = 0;
    while (i <= haystack.length - needle.length) {
        if (haystack.slice(i, i + needle.length) === needle) return i;
        i++;
    }
    return -1;
};