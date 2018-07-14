var os = require('os');

var ava = require('ava');
var test = ava.test;

var WindowsKill = require('..')

/*
os.platform = function () {
    return 'OTHER';
}
*/

test('instance with default options should not replace node.kill', t => {
    var nodeKill = process.kill;
    var windowsKill = WindowsKill();

    t.is(typeof windowsKill, 'function', 'typeof must be function.');
    t.is(nodeKill, process.kill, 'node\'s process.kill must be unchanged.');
    t.pass();
});
