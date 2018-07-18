var ava = require('ava');
var test = ava.test;

var Options = require('../lib/options');

var defaultOptions = {
    replaceNodeKill: true,
    warmUp: false
};

var options = new Options();

test('should have _defaultOptions property', t => {
    t.truthy(options.hasOwnProperty('_defaultOptions'), '_defaultOptions property should exists.');
    t.deepEqual(options._defaultOptions, defaultOptions, '_defaultOptions should be equal to defaultOptions.');
    t.pass();
});

test('should return null when getting missing id', t => {
    t.is(options.get('UNKNOWN'), null, 'should return null for UNKNOWN id which is missing.');
    t.pass();
});

test('_options and _defaultOptions should be equal', t => {
    t.truthy(options.hasOwnProperty('_options'), '_options property should exists.');
    t.deepEqual(options._options, options._defaultOptions, '_options should be equal to _defaultOptions.');
    t.pass();
});

test('get method should return correct values', t => {
    t.truthy(typeof options.get('replaceNodeKill'), 'boolean', 'replaceNodeKill should be boolean.');
    t.is(options.get('replaceNodeKill'), true, 'replaceNodeKill should be true.');
    t.is(options.get('replaceNodeKill'), defaultOptions.replaceNodeKill, 'replaceNodeKill should be equal.');
    t.truthy(typeof options.get('warmUp'), 'boolean', 'warmUp should be boolean.');
    t.is(options.get('warmUp'), false, 'warmUp should be false.');
    t.is(options.get('warmUp'), defaultOptions.warmUp, 'warmUp should be equal.');
    t.pass();
});
