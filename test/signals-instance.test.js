var ava = require('ava');
var test = ava.test;

var Signals = require('../lib/signals');
var signals = new Signals();

test('should return correct value when calling isSupported', t => {
    t.truthy(signals.isSupported('SIGBREAK'), 'SIGBREAK should be supported.');
    t.is(signals.isSupported('SIGBREAK'), true, 'Should return true for SIGBREAK.');
    t.truthy(signals.isSupported('SIGINT'), 'SIGINT should be supported.');
    t.is(signals.isSupported('SIGINT'), true, 'Should return true for SIGINT.');
    t.falsy(signals.isSupported('SIGHUP'), 'SIGHUP should not be supported.');
    t.is(signals.isSupported('SIGHUP'), false, 'Should return true for SIGHUP.');
    t.pass();
});

test('should return correct value when calling idToNumber', t => {
    t.is(signals.idToNumber('SIGBREAK'), 1, 'Should return 1 for SIGBREAK.');
    t.is(signals.idToNumber('SIGINT'), 2, 'Should return 2 for SIGINT.');
    t.is(signals.idToNumber('SIGHUP'), null, 'Should return null for SIGHUP.');
    t.pass();
});
