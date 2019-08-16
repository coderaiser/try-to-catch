'use strict';

const {run} = require('madrun');

module.exports = {
    "test": () => 'tape \'test/*.js\'',
    "watch:test": () => 'nodemon -w lib -w test -x "npm test"',
    "lint": () => 'putout lib test madrun.js',
    "fix:lint": () => run('lint', '--fix'),
    "coverage": () => 'nyc npm test',
    "report": () => 'nyc report --reporter=text-lcov | coveralls',
    "build": () => 'babel lib -d legacy',
    "wisdom": () => run(['build', 'legacy']),
    "legacy": () => 'echo "module.exports = require(\'./try-to-catch\')" > legacy/index.js'
};

