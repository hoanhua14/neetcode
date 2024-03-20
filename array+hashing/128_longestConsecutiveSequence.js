// input: an unsorted array of integers nums
// output: the length of the longest consecutive sequence => a number
// constraint: O(n) time => no looping twice or any methods that require traverse searching or recursive


// test case 1: nums [ 100, 4, 200, 1, 3, 2]
// output : array length is 4, sq = [1,2,3,4]

// test case 2: nums = [0,3,7,2,5,8,4,6,0,1]
// output: 9 , sq is [0,1,2,3,4,5,6,7,8]

// pseudo:
// create a var named longest
// create a var named max
// turn nums into set called numSet
// start looping thru numSet
    // if that key - 1 does not exist (meaning it's the start of a possible chain)
        // longest = 1
        // while that key + 1 is in the set (101)
            // increment longest by 1
            // let key be key + 1
            var longestConsecutive = function(nums) {
                let longest = 0;
                let max = 0;
                let numSet = new Set(nums);
                for (let num of numSet) {
                    if (!numSet.has(num-1)) {
                        longest += 1;
                        while (numSet.has(num+1)) {
                            longest += 1;
                            num += 1;

                        };
                        max = Math.max(longest, max);
                        longest = 0;

                    }
                }
                return max;
            };
