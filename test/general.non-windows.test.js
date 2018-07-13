var os = require('os');

var test = require('tape');

var WindowsKill = require('..');
if (os.platform() !== 'win32') {
    test('WindowsKill Options empty', function (t) {
        var nodeKill = process.kill;
        var windowsKill = WindowsKill();

        t.equal(typeof windowsKill, 'function', 'typeof must be function.');
        t.equal(nodeKill, process.kill, 'node\'s process.kill must be unchanged.');
        t.end();
    });

    test('WindowsKill replaceNodeKill true', function (t) {
        var nodeKill = process.kill;
        var windowsKill = WindowsKill({
            replaceNodeKill: true
        });

        t.equal(typeof windowsKill, 'function', 'typeof must be function.');
        t.equal(nodeKill, process.kill, 'node\'s process.kill must be unchanged.');
        t.end();
    });

    test('WindowsKill replaceNodeKill false', function (t) {
        var nodeKill = process.kill;
        var windowsKill = WindowsKill({
            replaceNodeKill: false
        });

        t.equal(typeof windowsKill, 'function', 'typeof must be function.');
        t.equal(nodeKill, process.kill, 'node\'s process.kill must be unchanged.');
        t.end();
    });
} else {
    throw new Error('Running non-windows test in windows environment.');
}
