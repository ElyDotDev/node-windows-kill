var os = require('os');

var ava = require('ava');
var test = ava.test;

var WindowsKill = require('..')
var windowsKill = WindowsKill();

test('sending SIGBREAK with invalid pid using returned function should throw exception', function (t) {
    t.throws(function () { windowsKill('INVALID', 'SIGBREAK'); }, { instanceOf: TypeError, message: 'invalid pid.' }, 'Exception error is instance of TypeError for pid="INVALID"');
    t.throws(function () { windowsKill('10.2', 'SIGBREAK'); }, { instanceOf: TypeError, message: 'invalid pid.' }, 'Exception error is instance of TypeError for pid="10.2"');
    t.throws(function () { windowsKill(10.2, 'SIGBREAK'); }, { instanceOf: TypeError, message: 'invalid pid.' }, 'Exception error is instance of TypeError for pid=10.2');
    t.pass();
});

test('sending SIGINT with invalid pid using returned function should throw exception', function (t) {
    t.throws(function () { windowsKill('INVALID', 'SIGINT'); }, { instanceOf: TypeError, message: 'invalid pid.' }, 'Exception error is instance of TypeError for pid="INVALID"');
    t.throws(function () { windowsKill('10.2', 'SIGINT'); }, { instanceOf: TypeError, message: 'invalid pid.' }, 'Exception error is instance of TypeError for pid="10.2"');
    t.throws(function () { windowsKill(10.2, 'SIGINT'); }, { instanceOf: TypeError, message: 'invalid pid.' }, 'Exception error is instance of TypeError for pid=10.2');
    t.pass();
});

test('sending SIGBREAK with invalid pid using process.kill function should throw exception', function (t) {
    t.throws(function () { process.kill('INVALID', 'SIGBREAK'); }, { instanceOf: TypeError, message: 'invalid pid.' }, 'Exception error is instance of TypeError for pid="INVALID"');
    t.throws(function () { process.kill('10.2', 'SIGBREAK'); }, { instanceOf: TypeError, message: 'invalid pid.' }, 'Exception error is instance of TypeError for pid="10.2"');
    t.throws(function () { process.kill(10.2, 'SIGBREAK'); }, { instanceOf: TypeError, message: 'invalid pid.' }, 'Exception error is instance of TypeError for pid=10.2');
    t.pass();
});

test('sending SIGINT with invalid pid using process.kill function should throw exception', function (t) {
    t.throws(function () { process.kill('INVALID', 'SIGINT'); }, { instanceOf: TypeError, message: 'invalid pid.' }, 'Exception error is instance of TypeError for pid="INVALID"');
    t.throws(function () { process.kill('10.2', 'SIGINT'); }, { instanceOf: TypeError, message: 'invalid pid.' }, 'Exception error is instance of TypeError for pid="10.2"');
    t.throws(function () { process.kill(10.2, 'SIGINT'); }, { instanceOf: TypeError, message: 'invalid pid.' }, 'Exception error is instance of TypeError for pid=10.2');
    t.pass();
});

test('sending SIGBREAK signal to not exsisting should throw exception', function (t) {
    t.throws(function () { windowsKill(-1, 'SIGBREAK'); }, { instanceOf: Error, message: 'windows-kill ESRCH' }, 'Exception error is instance of Error');
    t.pass();
});

test('sending SIGINT signal to not exsisting should throw exception', function (t) {
    t.throws(function () { windowsKill(-1, 'SIGINT'); }, { instanceOf: Error, message: 'windows-kill ESRCH' }, 'Exception error is instance of Error');
    t.pass();
});

test('should pass to node\'s process.kill if signal type (here 0) not supported', function (t) {
    t.throws(function () { windowsKill(-1, 0); }, { instanceOf: Error, message: 'kill ESRCH' }, 'Exception error is instance of Error');
    t.pass();
});
