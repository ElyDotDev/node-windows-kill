var ava = require('ava');
var test = ava.test;

var WindowsKill = require('..');
var nodeKill = process.kill;
var windowsKill = WindowsKill({
    replaceNodeKill: true
});

test('should replace node process.kill', t => {
    t.is(typeof windowsKill, 'function', 'typeof should be function.');
    t.not(windowsKill, process.kill, 'returned function should not be node\'s process.kill.');
    t.not(nodeKill, process.kill, 'node\'s process.kill should be changed.');
    t.pass();
});

