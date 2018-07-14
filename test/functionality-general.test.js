var os = require('os');

var ava = require('ava');
var test = ava.test;

var WindowsKill = require('..')
var windowsKill = WindowsKill();

test('sending SIGBREAK with invalid pid using returned function should throw exception', function (t) {
    var error = t.throws(function () { windowsKill('INVALID', 'SIGBREAK'); }, TypeError, 'Exception error is instance of TypeError for pid="INVALID"');
    t.is(error.message, 'invalid pid.');
    error = t.throws(function () { windowsKill('10.2', 'SIGBREAK'); }, TypeError, 'Exception error is instance of TypeError for pid="10.2"');
    t.is(error.message, 'invalid pid.');
    error = t.throws(function () { windowsKill(10.2, 'SIGBREAK'); }, TypeError, 'Exception error is instance of TypeError for pid=10.2');
    t.is(error.message, 'invalid pid.');
    t.pass();
});


test('sending SIGINT with invalid pid using returned function should throw exception', function (t) {
    var error = t.throws(function () { windowsKill('INVALID', 'SIGINT'); }, TypeError, 'Exception error is instance of TypeError for pid="INVALID"');
    t.is(error.message, 'invalid pid.');
    error = t.throws(function () { windowsKill('10.2', 'SIGINT'); }, TypeError, 'Exception error is instance of TypeError for pid="10.2"');
    t.is(error.message, 'invalid pid.');
    error = t.throws(function () { windowsKill(10.2, 'SIGINT'); }, TypeError, 'Exception error is instance of TypeError for pid=10.2');
    t.is(error.message, 'invalid pid.');
    t.pass();
});

test('sending SIGBREAK with invalid pid using process.kill function should throw exception', function (t) {
    var error = t.throws(function () { process.kill('INVALID', 'SIGBREAK'); }, TypeError, 'Exception error is instance of TypeError for pid="INVALID"');
    t.is(error.message, 'invalid pid.');
    error = t.throws(function () { process.kill('10.2', 'SIGBREAK'); }, TypeError, 'Exception error is instance of TypeError for pid="10.2"');
    t.is(error.message, 'invalid pid.');
    error = t.throws(function () { process.kill(10.2, 'SIGBREAK'); }, TypeError, 'Exception error is instance of TypeError for pid=10.2');
    t.is(error.message, 'invalid pid.');
    t.pass();
});

test('sending SIGINT with invalid pid using process.kill function should throw exception', function (t) {
    var error = t.throws(function () { process.kill('INVALID', 'SIGINT'); }, TypeError, 'Exception error is instance of TypeError for pid="INVALID"');
    t.is(error.message, 'invalid pid.');
    error = t.throws(function () { process.kill('10.2', 'SIGINT'); }, TypeError, 'Exception error is instance of TypeError for pid="10.2"');
    t.is(error.message, 'invalid pid.');
    error = t.throws(function () { process.kill(10.2, 'SIGINT'); }, TypeError, 'Exception error is instance of TypeError for pid=10.2');
    t.is(error.message, 'invalid pid.');
    t.pass();
});

test('sending SIGBREAK signal to not exsisting should throw exception', function (t) {
    var error = t.throws(function () { windowsKill(-1, 'SIGBREAK'); }, Error, 'Exception error is instance of Error');
    t.is(error.message, 'windows-kill ESRCH');
    t.pass();
});

test('sending SIGINT signal to not exsisting should throw exception', function (t) {
    var error = t.throws(function () { windowsKill(-1, 'SIGINT'); }, Error, 'Exception error is instance of Error');
    t.is(error.message, 'windows-kill ESRCH');
    t.pass();
});

test('should pass to node\'s process.kill if signal type (here 0) not supported', function (t) {
    var error = t.throws(function () { windowsKill(-1, 0); }, Error, 'Exception error is instance of Error');
    t.is(error.message, 'kill ESRCH');
    t.pass();
});

