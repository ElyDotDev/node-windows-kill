var ava = require('ava');

var WindowsKillClass = require('../lib/windows-kill-class');

var test = ava.test;

var windowsKill = new WindowsKillClass({
    replaceNodeKill: false
});

test('instance should be an object', t => {
    t.is(typeof windowsKill, 'object');
    t.pass();
});

test('instance should have kill property which is a function', t => {
    t.is(typeof windowsKill.kill, 'function', 'check kill property is function');
    t.pass();
});

test('instance should have shouldReplaceNodesKill property and must be false', t => {
    t.is(typeof windowsKill.shouldReplaceNodesKill, 'boolean', 'check shouldReplaceNodesKill property is boolean');
    t.is(windowsKill.shouldReplaceNodesKill, false, 'check shouldReplaceNodesKill property is boolean');
    t.pass();
});
