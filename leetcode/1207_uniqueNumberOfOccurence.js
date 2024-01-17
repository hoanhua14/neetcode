var uniqueOccurrences = function(arr) {
    let arrMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (!(arrMap.has(arr[i]))) {
            arrMap.set(arr[i], 1);
        } else if (arrMap.has(arr[i])) {
            let occ = arrMap.get(arr[i]) + 1;
            arrMap.set(arr[i], occ );
        };
    };
    let values = Array.from(arrMap.values());
    let valuesSet = new Set(values);
    console.log(valuesSet)
    if (valuesSet.size !== arrMap.size) {
        return false;
    } else {
        return true;
    }
};
