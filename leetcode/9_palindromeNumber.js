// input: an integer x
// output: true if palindrome and false if otherwise

// create a left pointer = 0
// create a right pointer = x.length - 1
// while left <= right
    // check if element at those indices are the same
        // if they are , increment left and decrement right
        // if not, return false
//  return true
var isPalindrome = function(x) {
    let stringX = x.toString();
    let l = 0;
    let r = stringX.length -1;
    while (l <= r) {
        if (stringX[l] == stringX[r]) {
            l+=1;
            r-=1;
        } else {
            return false;
        }
    }
    return true;
};
