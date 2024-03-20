var isAnagram = function(s, t) {
    for (let i of s) {
        if (!t.includes(i)) {
            return false;
        } else {
            s = s.replace(i, "");
            t = t.replace(i, "");
        }
    }
    debugger
    if (s=="" & t=="") {
        return true;
    }
};
/*
O: bool (true if valid, false if not)
I: 2 strings (s and t)
C: s and t consist of lowercase English letters
E: numbers, special char, space?
*/

// input: strings s and t
// output: true if anagram, false if not anagram
// pseudocode:
// make s and t into sets with value being the letter and key being the freq
// loop over string s
//      if ele is not in set, add to set and value being 1
//      if ele is in set, increment value by 1
// do the same with t
// stringify the two sets
// if they are the same, return true
// else, return false

const isAnagram = function(s, t)  {
    let sMap = new Map();
    let tMap = new Map();
    for (let i of s) {
        if (!sMap.has(i)) {
            sMap.set(i, 1);
        } else {
            sMap.set(i, sMap.get(i) + 1);
        }
    }
    for (let i of t) {
        if (!tMap.has(i)) {
            tMap.set(i, 1);
        } else {
            tMap.set(i, tMap.get(i) + 1);
        }
    }
    if (sMap.size !== tMap.size) {
        return false;
    }
    for (let [key, value] of sMap) {
        if (!tMap.has(key) || tMap.get(key) !== value) {
            return false;
        }
    }

    return true;
}
