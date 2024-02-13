var firstPalindrome = function(words) {
    for (let word of words) {
        let splittedWord = word.split('').reverse().join('');
        if (splittedWord == word) {
            return word;
        }
    }
    return ('')
};
