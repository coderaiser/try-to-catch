'use strict';

const wraptile = require('wraptile/legacy');

const success = (a) => [null, a];
const fail = (a) => [a];

module.exports = (fn, ...args) => {
    check(fn);
    
    return Promise.resolve()
        .then(wrap(fn, args))
        .then(success)
        .catch(fail);
};

function wrap(fn, args) {
    if (!args.length)
        return fn;
    
    return wraptile(fn, ...args);
}

function check(fn) {
    if (typeof fn !== 'function')
        throw Error('fn should be a function!');
}

