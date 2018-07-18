var ava = require('ava');
var test = ava.test;

var WindowsKillClass = require('../lib/windows-kill-class');
var windowsKill = new WindowsKillClass({
    replaceNodeKill: true
});

test('should replaceNodeKill option be true', t => {
    t.is(typeof windowsKill._options.get('replaceNodeKill'), 'boolean', 'should typeof replaceNodeKill option be boolean');
    t.is(windowsKill._options.get('replaceNodeKill'), true, 'should replaceNodeKill option be true');
    t.pass();
});
