var lengthOfLastWord = function(s) {
    let arr = s.split(' ');
    let lastIndex = arr.length-1
    while (!arr[lastIndex].length) {
        lastIndex--;
    }
    return arr[lastIndex].length;
};
