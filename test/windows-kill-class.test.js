var ava = require('ava');

var WindowsKillClass = require('../lib/windows-kill-class');

var test = ava.test;

test('should export function when required', t => {
    t.is(typeof WindowsKillClass, 'function');
    t.pass();
});

test('should have kill method', t => {
    t.is(typeof WindowsKillClass.prototype.kill, 'function');
    t.pass();
});
