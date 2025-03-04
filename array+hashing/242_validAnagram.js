var isAnagram = function(s, t) {
    for (let i of s) {
        if (!t.includes(i)) {
            return false;
        } else {
            s = s.replace(i, "");
            t = t.replace(i, "");
        }
    }
    debugger
    if (s=="" & t=="") {
        return true;
    }
};
