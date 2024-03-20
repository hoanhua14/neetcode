// input: string
// output: boolean, true if palindrome, false if not
// convert to lower case, remove non-alphanumeric char
// empty string is also a palindrome

// first, remove all the non-alphanum char
// use two pointer l and r (l being first index 0, r being the last index: length of string -1)
// while l is smaller or equal to r:
    // if char at index l is the same as char at index r:
        // increment l by 1. decrement r by 1
    // if they are not the same:
        // return false
// return true

var isPalindrome = function(s) {
    if (s.length == 0) {
        return true;
    }
    let formattedS = "";
    for (let char of s) {
        if (/[a-zA-Z0-9]/.test(char)) {
            formattedS += char.toLowerCase();
        };
    };
    console.log(formattedS)
    let l = 0, r = formattedS.length - 1;
    while (l <= r) {
        if (formattedS[l] === formattedS[r]) {
            l+=1;
            r-=1;
        } else {
            return false;
        }
    };
    return true;

};
