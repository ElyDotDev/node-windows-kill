var ava = require('ava');
var test = ava.test;

var WindowsKillClass = require('../lib/windows-kill-class');

var windowsKill = new WindowsKillClass();

test('should be an object', t => {
    t.is(typeof windowsKill, 'object');
    t.pass();
});

test('should have kill property which is a function', t => {
    t.is(typeof windowsKill.kill, 'function', 'check kill property is function');
    t.pass();
});

test('should replaceNodeKill option be true', t => {
    t.is(typeof windowsKill._options.get('replaceNodeKill'), 'boolean', 'should typeof replaceNodeKill option be boolean');
    t.is(windowsKill._options.get('replaceNodeKill'), true, 'should replaceNodeKill option be true');
    t.pass();
});

test('should not warmUp option be true', t => {
    t.is(typeof windowsKill._options.get('warmUp'), 'boolean', 'should typeof warmUp option be boolean');
    t.is(windowsKill._options.get('warmUp'), false, 'should warmUp option be false');
    t.pass();
});

