/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let max = 0;
  let result = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let sub = s.substring(i, j + 1);
      if (isPalindrome(sub) && sub.length > max) {
        max = sub.length;
        result = sub;
      }
    }
  }
  return result;
};
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
