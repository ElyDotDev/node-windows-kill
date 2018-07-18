var ava = require('ava');
var test = ava.test;

var WindowsKillClass = require('../lib/windows-kill-class');
var windowsKill = new WindowsKillClass({
    replaceNodeKill: false
});

test('should not warmUp option be true', t => {
    t.is(typeof windowsKill._options.get('warmUp'), 'boolean', 'should typeof warmUp option be boolean');
    t.is(windowsKill._options.get('warmUp'), false, 'should warmUp option be false');
    t.pass();
});

