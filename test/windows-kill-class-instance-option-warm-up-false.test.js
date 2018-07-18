var ava = require('ava');
var test = ava.test;

var WindowsKillClass = require('../lib/windows-kill-class');
var windowsKill = new WindowsKillClass({
    replaceNodeKill: false
});

test('should not replaceNodeKill option be true', t => {
    t.is(typeof windowsKill._options.get('replaceNodeKill'), 'boolean', 'should typeof replaceNodeKill option be boolean');
    t.is(windowsKill._options.get('replaceNodeKill'), false, 'should replaceNodeKill option be false');
    t.pass();
});

