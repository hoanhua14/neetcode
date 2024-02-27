var compose = function(functions) {
    const func = (acc, f) => f(acc);
    return function(x) {
        return functions.reduceRight(func,x);
        }
    }
