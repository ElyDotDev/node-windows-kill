var ava = require('ava');
var test = ava.test;

var Options = require('../lib/options');

test('should have get method in it\'s prototype', t => {
    t.truthy(Options.prototype.get, 'It should have get method.');
    t.is(typeof Options.prototype.get, 'function', 'Typeof get should be function.');
    t.pass();
});
