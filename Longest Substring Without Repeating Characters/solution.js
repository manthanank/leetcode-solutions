/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0; // Declare a variable called max
  let start = 0; // Declare a variable called start
  let end = 0; // Declare a variable called end
  let map = {}; // Declare a variable called map
  while (end < s.length) {
    // while end is less than the length of the string
    if (!map[s[end]]) {
      // if the character is not in the map
      map[s[end]] = 1; // add the character to the map
      end++; // increment the end
    } else {
      // if the character is in the map
      max = Math.max(max, end - start); // calculate the max
      delete map[s[start]]; // delete the character from the map
      start++; // increment the start
    }
  }
  max = Math.max(max, end - start); // calculate the max
  return max; // return the max
}; // End of function
