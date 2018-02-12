'use strict';

const test = require('tape');
const tryToCatch = require('..');

test('try-to-catch: no args', (t) => {
    const fn = () => tryToCatch();
    
    t.throws(fn, /fn should be a function!/, 'should throw');
    t.end();
});

test('try-to-catch: resolves', async (t) => {
    const message = 'hello';
    const fn = (a) => Promise.resolve(a);
    
    const [, result] = await tryToCatch(fn, message);
    
    t.equal(result, message, 'should equal');
    t.end();
});

test('try-to-catch: rejects', async (t) => {
    const message = 'hello';
    const fn = (a) => Promise.reject(a);
    
    const [error] = await tryToCatch(fn, message);
    
    t.equal(error, message, 'should equal');
    t.end();
});

