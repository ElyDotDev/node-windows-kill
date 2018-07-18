var ava = require('ava');
var test = ava.test;

var WindowsKillClass = require('../lib/windows-kill-class');

test('should export function when required', t => {
    t.is(typeof WindowsKillClass, 'function');
    t.pass();
});

test('should have kill method', t => {
    t.is(typeof WindowsKillClass.prototype.kill, 'function');
    t.pass();
});
