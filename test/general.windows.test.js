var test = require('tape');

var WindowsKill = require('..');
var WindowsKillClass = require('../lib/windows-kill');
var WindowsKillNative = require('../build/Release/windows-kill.node');

test('General WindowsKill', function (t) {
    t.equal(typeof WindowsKill, 'function', 'typeof must be function.');
    t.end();
});

test('General WindowsKillClass', function (t) {
    t.equal(typeof WindowsKillClass, 'function', 'typeof must be function.');
    t.end();
});

test('General WindowsKillClass Instance', function (t) {
    var windowsKillClass = new WindowsKillClass();
    t.equal(typeof windowsKillClass, 'object', 'typeof must be object.');
    t.equal(typeof windowsKillClass.kill, 'function', 'typeof kill method must be function.');
    t.equal(typeof windowsKillClass._replaceNodeKill, 'function', 'typeof  _replaceNodeKill method must be function.');
    t.equal(typeof windowsKillClass._nodeKill, 'function', 'typeof _nodeKill method must be function.');
    t.equal(typeof windowsKillClass.shouldReplaceNodesKill, 'boolean', 'typeof shouldReplaceNodesKill property must be boolean.');
    t.end();
});

test('General WindowsKillNative', function (t) {
    t.equal(typeof WindowsKillNative, 'object', 'typeof must be object.');
    t.equal(typeof WindowsKillNative.send, 'function', 'typeof send method must be function.');
    t.equal(WindowsKillNative.send.toString(), 'function () { [native code] }', 'typeof send method toString must show that it is native code.');
    t.end();
});
