'use strict';

const {promisify} = require('node:util');
const test = require('supertape');
const {tryToCatch} = require('try-to-catch');

test('try-to-catch: cjs: no args', async (t) => {
    const [e] = await tryToCatch(tryToCatch);
    
    t.equal(e.message, 'fn should be a function!', 'should throw');
    t.end();
});

test('try-to-catch: cjs: resolves', async (t) => {
    const message = 'hello';
    const fn = (a) => Promise.resolve(a);
    
    const [, result] = await tryToCatch(fn, message);
    
    t.equal(result, message);
    t.end();
});

test('try-to-catch: cjs: rejects', async (t) => {
    const message = 'hello';
    const fn = (a) => Promise.reject(a);
    
    const [error] = await tryToCatch(fn, message);
    
    t.equal(error, message);
    t.end();
});

test('try-to-catch: cjs: rejects: not promise', async (t) => {
    const message = 'hello';
    const fn = (a) => {
        throw Error(a);
    };
    
    const [error] = await tryToCatch(fn, message);
    
    t.equal(error.message, message);
    t.end();
});

test('try-to-catch: cjs: resolves: not promise: no error', async (t) => {
    const fn = () => {};
    const [error] = await tryToCatch(fn);
    
    t.notOk(error, 'should not be error');
    t.end();
});

test('try-to-catch: cjs: resolves: not promise', async (t) => {
    const fn = () => 5;
    const [, data] = await tryToCatch(fn);
    
    t.equal(data, 5, 'should not be error');
    t.end();
});

test('try-to-catch: cjs: resolves: promisify', async (t) => {
    const fn = promisify((a, b, fn) => fn(null, a + b));
    const [, data] = await tryToCatch(fn, 1, 2);
    
    t.equal(data, 3, 'should not be error');
    t.end();
});

test('try-to-catch: cjs: nested', async (t) => {
    const [e] = await tryToCatch.tryToCatch(tryToCatch);
    
    t.equal(e.message, 'fn should be a function!', 'should throw');
    t.end();
});
