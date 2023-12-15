var threeSum = function(nums) {
    let arr = nums.sort();
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i > 1 && arr[i] == arr[i-1]) {
            continue;
        };
        let l = i+1;
        let r = arr.length -1;
        while (l<r){
            let ts = arr[i]+arr[l]+arr[r];
            if (ts == 0) {
                let resultArr = [arr[i], arr[l], arr[r]];
                result.push(resultArr);

                l+=1;
                while (arr[l] == arr[l-1] && l < r) {
                    l+=1;
                }
            } else if (ts > 0) {
                r-=1;
            } else if (ts < 0) {
                l+=1;
            }
        }
    }
    return result;
};
