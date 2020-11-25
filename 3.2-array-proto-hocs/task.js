'use strict';

// task 2

function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    return arr1.every((item, index) => item === arr2[index]);
}

function memorize(fn, limit) {
    let memory = [];

    return function(...args) {
        const index = memory.findIndex(item => compareArrays(item.args, args));

        if (index >= 0) {
            console.log('результат берётся из памяти');

            return memory[index].result;
        } else {
            const result = fn(...args);
            memory.push({
                args: args,
                result,
            })

            if (memory.length > limit) {
                memory.shift();
            }

            return result;
        }
    };
}