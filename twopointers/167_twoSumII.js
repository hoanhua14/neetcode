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
