var os = require('os');

var ava = require('ava');
var test = ava.test;

var WindowsKill = require('..')

test('instance with replaceNodeKill true option should replace node.kill', t => {
    var nodeKill = process.kill;
    var windowsKill = WindowsKill({
        replaceNodeKill: true
    });

    t.is(typeof windowsKill, 'function', 'typeof must be function.');
    t.not(nodeKill, process.kill, 'node\'s process.kill must be changed.');
    t.pass();
});
