// input: given a string s
// output: return true if palindrome can be formed after deleting at most 1 char

// have a left pointer
// have a right pointer
// counter = 1
// while left pointer is smaller or equal to right pointer
    // if ele at left and right are the same
        // increment left and decrement right
    // if ele at left and ele at right are not the same
        // remove the one at left index
        // increment counter by 1

        var validPalindrome = function(s) {
            let l = 0;
            let r = s.length - 1;
            let counter = 1; // Ensure to declare counter variable properly
            while (l <= r) {
                if (s[l] === s[r]) {
                    l++;
                    r--;
                } else if (counter > 0) {
                    counter--;
                    // If removing from the left side leads to a palindrome
                    if (isPalindrome(s.slice(l + 1, r + 1)) || isPalindrome(s.slice(l, r))) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            }
            return true;
        };

        function isPalindrome(str) {
            return str === str.split('').reverse().join('');
        }
