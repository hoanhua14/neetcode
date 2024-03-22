// input: an integer num, recursively add all digits until the result has only 1 digit
// output: a single digit number


// recursively
// turn num into a string, split that string into an array of num
// while sum to string has length of >1
// loop thru the array of num
    // increment sum with the current ele

    const addDigits = function(num) {
        let nums = num.toString().split('')
        let sum = 0;
        for (let i = 0; i< nums.length; i++) {
            sum+=parseInt(nums[i]);
        }
        if (sum.toString().length > 1) {
            return addDigits(sum)
        } else {

            return sum;
        }
        }
    console.log(addDigits(37))
