/**
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
var maximumTastiness = function(price, k) {
    let maxTastiness = 0;
    let candyCounts = new Array(price.length).fill(0);
    for (let i = 0; i < price.length; i++) {
        let maxPrice = -1;
        let maxPriceIndex = -1;
        for (let j = 0; j < price.length; j++) {
            if (candyCounts[j] < k && price[j] > maxPrice) {
                maxPrice = price[j];
                maxPriceIndex = j;
            }
        }
        if (maxPriceIndex !== -1) {
            candyCounts[maxPriceIndex]++;
            maxTastiness += maxPrice;
        }
    }
    return maxTastiness;
};