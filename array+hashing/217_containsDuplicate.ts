function containsDuplicates(nums: number[]): boolean {
    const checked: number[] = [];
    for (let i of nums) {
        if (checked.includes(i)) {
            return true;
        } else {
            checked.push(i);
        }
    }
    return false;
};
