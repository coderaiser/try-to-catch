'use strict';

const success = (a) => [null, a];
const fail = (a) => [a];

module.exports = (fn, ...args) => {
    check(fn);
    
    return fn(...args)
        .then(success)
        .catch(fail);
};

function check(fn) {
    if (typeof fn !== 'function')
        throw Error('fn should be a function!');
}

