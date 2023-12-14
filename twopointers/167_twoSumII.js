var twoSum = function(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let a = i+1; a < numbers.length; a++) {
            if (numbers[i] + numbers[a] == target) {
                return [i+1, a+1];
            }
        }
    }
};
