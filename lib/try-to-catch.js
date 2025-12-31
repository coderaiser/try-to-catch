'use strict';

const isFn = (a) => typeof a === 'function';

module.exports = async (fn, ...args) => {
    check(fn);
    
    try {
        return [null, await fn(...args)];
    } catch(e) {
        return [e];
    }
};

function check(fn) {
    if (!isFn(fn))
        throw Error('fn should be a function!');
}
