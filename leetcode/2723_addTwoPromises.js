var addTwoPromises = async function(promise1, promise2) {
    let value1 = await promise1;
    let value2 = await promise2;
    return value1+value2;
};
