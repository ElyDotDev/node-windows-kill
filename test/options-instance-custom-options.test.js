var ava = require('ava');
var test = ava.test;

var Options = require('../lib/options');

var defaultOptions = {
    replaceNodeKill: true,
    warmUp: false
};

var customOptions = {
    replaceNodeKill: false,
    warmUp: true
};

var options = new Options(customOptions);

test('should have default options', t => {
    t.truthy(options.hasOwnProperty('_defaultOptions'), '_defaultOptions property should exists.');
    t.deepEqual(options._defaultOptions, defaultOptions, '_defaultOptions should be equal to defaultOptions.');
    t.pass();
});

test('should return null when getting missing id', t => {
    t.is(options.get('UNKNOWN'), null, 'should return null for UNKNOWN id which is missing.');
    t.pass();
});

test('instance _options and _defaultOptions should not be equal', t => {
    t.truthy(options.hasOwnProperty('_options'), '_options property should exists.');
    t.notDeepEqual(options._options, options._defaultOptions, '_options should not be equal to _defaultOptions.');
    t.deepEqual(options._options, customOptions, '_options should be equal to customOptions.');
    t.pass();
});

test('get method should return correct values', t => {
    t.truthy(typeof options.get('replaceNodeKill'), 'boolean', 'replaceNodeKill should be boolean.');
    t.is(options.get('replaceNodeKill'), false, 'replaceNodeKill should be true.');
    t.is(options.get('replaceNodeKill'), customOptions.replaceNodeKill, 'replaceNodeKill should be equal.');
    t.truthy(typeof options.get('warmUp'), 'boolean', 'warmUp should be boolean.');
    t.is(options.get('warmUp'), true, 'warmUp should be false.');
    t.is(options.get('warmUp'), customOptions.warmUp, 'warmUp should be equal.');
    t.pass();
});

