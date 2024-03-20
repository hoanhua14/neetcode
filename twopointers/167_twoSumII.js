var twoSum = function(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let a = i+1; a < numbers.length; a++) {
            if (numbers[i] + numbers[a] == target) {
                return [i+1, a+1];
            }
        }
    }
};

var twoSum = function(numbers, target) {
    let l = 0;
    let r = numbers.length - 1;
    for (let l = 0; l < numbers.length; l++) {
        while (numbers[l] + numbers[r] > target) {
            r -= 1;
        }
        if (numbers[l] + numbers[r] == target) {
            return [l+1, r+1];
        }
    }
};


// input: an array of integer nums , a target integer num
// output: indices of two numbers that add up to target
// loop thru the array
    // find the difference between that ele and target => give me a number d to look for
    // check if index of d is valid
        // if valid
        // return an array of the 2 indices


        var twoSum = function(nums, target) {
            for (let i = 0; i < nums.length; i++) {
                let diff = target - nums[i];
                let indexOfDiff = nums.indexOf(diff)
                if (indexOfDiff !== -1 && i !== indexOfDiff) {

                    return [i, nums.indexOf(diff)]
                }
            }
        };
