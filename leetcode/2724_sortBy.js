var sortBy = function(arr, fn) {
    // Use a custom sorting function that compares the numeric values returned by fn
    const customSort = (a, b) => fn(a) - fn(b);

    // Sort the original array based on the function outputs
    return arr.sort(customSort);
};
