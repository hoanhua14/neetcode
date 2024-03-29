
function isHappy(n) {
    // Define a helper function to get the next number
    function getNextNumber(number) {
        let totalSum = 0;
        while (number > 0) {
            const digit = number % 10;
            totalSum += digit * digit;
            number = Math.floor(number / 10);
        }
        return totalSum;
    }

    // Set to keep track of numbers encountered
    const seen = new Set();

    // Continue the process until reaching 1 or detecting a cycle
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getNextNumber(n);
    }


    return n === 1;
}
