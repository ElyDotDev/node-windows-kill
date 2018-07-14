var os = require('os');

var ava = require('ava');
var test = ava.test;

var WindowsKill = require('..')

test('instance with replaceNodeKill false option should not replace node.kill', t => {
    var nodeKill = process.kill;
    var windowsKill = WindowsKill({
        replaceNodeKill: false
    });

    t.is(typeof windowsKill, 'function', 'typeof must be function.');
    t.is(nodeKill, process.kill, 'node\'s process.kill must be unchanged.');
    t.pass();
});
