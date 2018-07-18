var ava = require('ava');
var test = ava.test;

var Signals = require('../lib/signals');

test('should have isSupported method in it\'s prototype', t => {
    t.truthy(Signals.prototype.isSupported, 'It should have isSupported method.');
    t.is(typeof Signals.prototype.isSupported, 'function', 'Typeof isSupported should be function.');
    t.pass();
});

test('should have idToNumber method in it\'s prototype', t => {
    t.truthy(Signals.prototype.idToNumber, 'It should have idToNumber method.');
    t.is(typeof Signals.prototype.idToNumber, 'function', 'Typeof idToNumber should be function.');
    t.pass();
});
