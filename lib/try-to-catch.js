const isFn = (a) => typeof a === 'function';

export const tryToCatch = async (fn, ...args) => {
    check(fn);
    
    try {
        return [null, await fn(...args)];
    } catch(e) {
        return [e];
    }
};

export default tryToCatch;

function check(fn) {
    if (!isFn(fn))
        throw Error('fn should be a function!');
}
