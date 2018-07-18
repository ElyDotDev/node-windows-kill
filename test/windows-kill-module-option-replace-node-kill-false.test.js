var ava = require('ava');
var test = ava.test;

var WindowsKill = require('..');
var nodeKill = process.kill;
var windowsKill = WindowsKill({
    replaceNodeKill: false
});

test('should not replace node process.kill', t => {
    t.is(typeof windowsKill, 'function', 'typeof should be function.');
    t.is(nodeKill, process.kill, 'node\'s process.kill should be unchanged.');
    t.pass();
});

