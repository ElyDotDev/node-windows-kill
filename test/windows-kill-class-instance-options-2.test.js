var ava = require('ava');

var WindowsKillClass = require('../lib/windows-kill-class');

var test = ava.test;

var noop = function () { };

var defaultApplyOptions = WindowsKillClass.prototype._applyOptions;
WindowsKillClass.prototype._applyOptions = noop;

var windowsKill = new WindowsKillClass({
    replaceNodeKill: false,
    warmUp: true
});

windowsKill._native.warmUp = noop;
WindowsKillClass.prototype._applyOptions = defaultApplyOptions;

windowsKill._applyOptions();


test('instance should be an object', t => {
    t.is(typeof windowsKill, 'object');
    t.pass();
});

test('instance should have kill property which is a function', t => {
    t.is(typeof windowsKill.kill, 'function', 'check kill property is function');
    t.pass();
});

test('instance should have _shouldReplaceNodesKill property and must be false', t => {
    t.is(typeof windowsKill._shouldReplaceNodesKill, 'boolean', 'check _shouldReplaceNodesKill property is boolean');
    t.is(windowsKill._shouldReplaceNodesKill, false, 'check _shouldReplaceNodesKill property is boolean');
    t.pass();
});

test('instance should have _shouldWarmUp property and must be true', t => {
    t.is(typeof windowsKill._shouldWarmUp, 'boolean', 'check _shouldWarmUp property is boolean');
    t.is(windowsKill._shouldWarmUp, true, 'check _shouldWarmUp property is boolean');
    t.pass();
});
