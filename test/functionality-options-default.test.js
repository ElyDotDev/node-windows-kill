var ava = require('ava');
var test = ava.test;

var WindowsKill = require('..')
var windowsKill = WindowsKill();

test('should throw exception when sending SIGBREAK with invalid pid using returned function', function (t) {
    var error = t.throws(function () { windowsKill('INVALID', 'SIGBREAK'); }, TypeError, 'Exception error is instance of TypeError for pid="INVALID"');
    t.is(error.message, 'invalid pid.');
    error = t.throws(function () { windowsKill('10.2', 'SIGBREAK'); }, TypeError, 'Exception error is instance of TypeError for pid="10.2"');
    t.is(error.message, 'invalid pid.');
    error = t.throws(function () { windowsKill(10.2, 'SIGBREAK'); }, TypeError, 'Exception error is instance of TypeError for pid=10.2');
    t.is(error.message, 'invalid pid.');
    t.pass();
});

test('should throw exception when sending SIGINT with invalid pid using returned function', function (t) {
    var error = t.throws(function () { windowsKill('INVALID', 'SIGINT'); }, TypeError, 'Exception error is instance of TypeError for pid="INVALID"');
    t.is(error.message, 'invalid pid.');
    error = t.throws(function () { windowsKill('10.2', 'SIGINT'); }, TypeError, 'Exception error is instance of TypeError for pid="10.2"');
    t.is(error.message, 'invalid pid.');
    error = t.throws(function () { windowsKill(10.2, 'SIGINT'); }, TypeError, 'Exception error is instance of TypeError for pid=10.2');
    t.is(error.message, 'invalid pid.');
    t.pass();
});

test('should throw exception when sending SIGBREAK with invalid pid using process.kill function', function (t) {
    var error = t.throws(function () { process.kill('INVALID', 'SIGBREAK'); }, TypeError, 'Exception error is instance of TypeError for pid="INVALID"');
    t.is(error.message, 'invalid pid.');
    error = t.throws(function () { process.kill('10.2', 'SIGBREAK'); }, TypeError, 'Exception error is instance of TypeError for pid="10.2"');
    t.is(error.message, 'invalid pid.');
    error = t.throws(function () { process.kill(10.2, 'SIGBREAK'); }, TypeError, 'Exception error is instance of TypeError for pid=10.2');
    t.is(error.message, 'invalid pid.');
    t.pass();
});

test('should throw exception when sending SIGINT with invalid pid using process.kill function', function (t) {
    var error = t.throws(function () { process.kill('INVALID', 'SIGINT'); }, TypeError, 'Exception error is instance of TypeError for pid="INVALID"');
    t.is(error.message, 'invalid pid.');
    error = t.throws(function () { process.kill('10.2', 'SIGINT'); }, TypeError, 'Exception error is instance of TypeError for pid="10.2"');
    t.is(error.message, 'invalid pid.');
    error = t.throws(function () { process.kill(10.2, 'SIGINT'); }, TypeError, 'Exception error is instance of TypeError for pid=10.2');
    t.is(error.message, 'invalid pid.');
    t.pass();
});

test('should throw exception when sending SIGBREAK signal to not existing pid', function (t) {
    var error = t.throws(function () { windowsKill(-1, 'SIGBREAK'); }, Error, 'Exception error is instance of Error');
    t.is(error.message, 'windows-kill ESRCH');
    t.pass();
});

test('should throw exception when sending SIGINT signal to not existing pid', function (t) {
    var error = t.throws(function () { windowsKill(-1, 'SIGINT'); }, Error, 'Exception error is instance of Error');
    t.is(error.message, 'windows-kill ESRCH');
    t.pass();
});

test('should pass to node\'s process.kill if signal type not supported', function (t) {
    var error = t.throws(function () { windowsKill(-1, 0); }, Error, 'Exception error is instance of Error');
    t.is(error.message, 'kill ESRCH');
    error = t.throws(function () { windowsKill(-1, 'SIGTERM'); }, Error, 'Exception error is instance of Error');
    t.is(error.message, 'kill ESRCH');
    error = t.throws(function () { windowsKill(-1, 'SIGHUP'); }, Error, 'Exception error is instance of Error');
    t.is(error.message, 'kill ESRCH');
    error = t.throws(function () { windowsKill(-1, 'SIGWINCH'); }, Error, 'Exception error is instance of Error');
    t.is(error.message, 'kill ESRCH');
    error = t.throws(function () { windowsKill(-1, 'SIGKILL'); }, Error, 'Exception error is instance of Error');
    t.is(error.message, 'kill ESRCH');
    error = t.throws(function () { windowsKill(-1, 'SIGFPE'); }, Error, 'Exception error is instance of Error');
    t.is(error.message, 'kill ESRCH');
    error = t.throws(function () { windowsKill(-1, 'SIGSEGV'); }, Error, 'Exception error is instance of Error');
    t.is(error.message, 'kill ESRCH');
    error = t.throws(function () { windowsKill(-1, 'SIGILL'); }, Error, 'Exception error is instance of Error');
    t.is(error.message, 'kill ESRCH');
    error = t.throws(function () { windowsKill(-1, 'SIGUSR1'); }, Error, 'Exception error is instance of Error');
    t.is(error.message, 'Unknown signal: SIGUSR1');
    error = t.throws(function () { windowsKill(-1, 'SIGPIPE'); }, Error, 'Exception error is instance of Error');
    t.is(error.message, 'Unknown signal: SIGPIPE');
    error = t.throws(function () { windowsKill(-1, 'SIGSTOP'); }, Error, 'Exception error is instance of Error');
    t.is(error.message, 'Unknown signal: SIGSTOP');
    error = t.throws(function () { windowsKill(-1, 'SIGBUS'); }, Error, 'Exception error is instance of Error');
    t.is(error.message, 'Unknown signal: SIGBUS');
    t.pass();
});

