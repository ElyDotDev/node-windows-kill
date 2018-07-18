var path = require('path');

var binary = require('node-pre-gyp');
var ava = require('ava');
var test = ava.test;

var bindingPath = binary.find(path.resolve(path.join(__dirname, '../package.json')));
var WindowsKillNative = require(bindingPath);

test('should export object when required', t => {
    t.is(typeof WindowsKillNative, 'object');
    t.pass();
});

test('should have send property which is a function', t => {
    t.truthy(WindowsKillNative.hasOwnProperty('send'));
    t.is(typeof WindowsKillNative.send, 'function', 'typeof send method should be function.');
    t.pass();
});

test('should send method contain native code', t => {
    t.is(WindowsKillNative.send.toString(), 'function () { [native code] }');
    t.pass();
});

test('should have warmUp property which is a function', t => {
    t.truthy(WindowsKillNative.hasOwnProperty('warmUp'));
    t.is(typeof WindowsKillNative.warmUp, 'function', 'typeof warmUp method should be function.');
    t.pass();
});

test('should warmUp method contain native code', t => {
    t.is(WindowsKillNative.warmUp.toString(), 'function () { [native code] }');
    t.pass();
});

