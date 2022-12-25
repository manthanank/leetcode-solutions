/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function(words, target, startIndex) {
    let distance = words.length + 1;
    for (let i = 0; i < words.length; i++) {
        if (words[i] === target) {
            let currDistance = Math.min(Math.abs(startIndex - i), words.length - Math.abs(startIndex - i));
            distance = Math.min(distance, currDistance);
        }
    }
    if (distance === words.length + 1) return -1;
        return distance;
};