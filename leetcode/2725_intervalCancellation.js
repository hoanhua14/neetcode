var cancellable = function(fn, args, t) {
    fn(...args);

    const runner =
        setInterval(() => {
            fn(...args)
        }, t)

    return function() {
        clearInterval(runner)
    }
};
