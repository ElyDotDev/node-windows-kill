var os = require('os');

var WindowsKill = require('./windows-kill');
var windowsKill = null;

module.exports = function (options) {
    if (os.platform() === 'win32') {
        if (windowsKill === null) {
            windowsKill = new WindowsKill(options);
        }
        return function (pid, signal) {
            windowsKill.kill(pid, signal);
        };
    } else {
        return process.kill;
    }
};
