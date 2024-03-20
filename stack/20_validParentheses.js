// input: string s
// output: boolean, true if valid  and false if not
var isValid = function(s) {
    let pair = new Map([
        [")", "("],
        ["}", "{"],
        ["]", "["]
    ]);
    let stack = []
    for (let i of s) {
        if (pair.has(i)) {
            if (stack && stack[stack.length -1] == pair.get(i)) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(i);
        }
    }
    return stack.length === 0;
};
