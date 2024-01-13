var minSteps = function(s, t) {
    let mapS = new Map();
    let mapT = new Map();

    for (let char of s) {
        mapS.set(char, (mapS.get(char) || 0) + 1);
    }

    for (let char of t) {
        mapT.set(char, (mapT.get(char) || 0) + 1);
    }

    let res = 0;

    for (let char of t) {
        if (mapS.has(char) && mapS.get(char) > 0) {
            mapS.set(char, mapS.get(char) - 1);
        } else {
            res += 1;
        }
    }

    return res;
};
