import {run} from 'madrun';

export default {
    'wisdom': () => run(['lint', 'coverage', 'test:dts']),
    'test': () => `tape 'test/*.{js,cjs}'`,
    'test:dts': () => 'check-dts test/*.ts',
    'watch:test': async () => await run('watcher', `"${await run('test')}"`),
    'watcher': () => 'nodemon -w test -w lib -w bin --exec',
    'lint': () => 'putout .',
    'fix:lint': () => run('lint', '--fix'),
    'coverage': async () => `c8 ${await run('test')}`,
    'report': () => 'c8 report --reporter=lcov',
};
