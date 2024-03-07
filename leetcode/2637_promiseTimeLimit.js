var timeLimit = function(fn, t) {

    return async function(...args) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                reject(new Error("Time Limit Exceeded"));
            }, t);

        fn(...args)
            .then((result) => {
                clearTimeout(timer)
                resolve(result)
            })
            .catch((err) => {
                clearTimeout(timer)
                reject(err)
            })
        })
    }
}
