var binary = require('node-pre-gyp');
var path = require('path')
var ava = require('ava');

var bindingPath = binary.find(path.resolve(path.join(__dirname, '../package.json')));
var WindowsKillNative = require(bindingPath);
var test = ava.test;

test('should export object when required', t => {
    t.is(typeof WindowsKillNative, 'object');
    t.pass();
});

test('should have send property which is a function', t => {
    t.truthy(WindowsKillNative.hasOwnProperty('send'));
    t.is(typeof WindowsKillNative.send, 'function', 'typeof send method must be function.');
    t.pass();
});

test('send method should contain native code', t => {
    t.is(WindowsKillNative.send.toString(), 'function () { [native code] }');
    t.pass();
});

