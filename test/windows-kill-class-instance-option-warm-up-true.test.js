var ava = require('ava');
var test = ava.test;

var windowsKill = require('./_option-warmup-true-helper');

test('should not warmUp option be true', t => {
    t.is(typeof windowsKill._options.get('warmUp'), 'boolean', 'should typeof warmUp option be boolean');
    t.is(windowsKill._options.get('warmUp'), true, 'should warmUp option be true');
    t.pass();
});
