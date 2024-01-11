var expect = function(val) {
    const toBe = (val1) => {
        if (val === val1) {
            return true;
        } else {
            throw new Error('Not Equal');
        }
    }
    const notToBe = (val2) => {
        if (val !== val2) {
            return true;
        } else {
            throw new Error('Equal');
        }
    }
    return {
        toBe,
        notToBe
    }
};
