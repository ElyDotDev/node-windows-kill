var ava = require('ava');
var test = ava.test;

/*
var os = require('os')
// Mocks
os.platform = function () {
    return 'OTHER';
}
*/

var WindowsKill = require('..');
var nodeKill = process.kill;
var windowsKill = WindowsKill();

test('should not replace node process.kill', t => {
    t.is(typeof windowsKill, 'function', 'typeof should be function.');
    t.is(windowsKill, process.kill, 'returned function should be node\'s process.kill.');
    t.is(nodeKill, process.kill, 'node\'s process.kill should be unchanged.');
    t.pass();
});
