/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function(n, k) {
    let right = true;
    let position = 0;

    for (let i = 0; i < k; i++) {
        if (right) {
            position++;
            if (position === n - 1) {
                right = false;
            }
        } else {
            position--;
            if (position === 0) {
                right = true;
            }
        }
    }

    return position;
    
};