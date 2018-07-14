var ava = require('ava');
var test = ava.test;

var WindowsKill = require('..')

test('should export function when required', t => {
    t.is(typeof WindowsKill, 'function');
    t.pass();
});
