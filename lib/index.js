var os = require('os');

var WindowsKill = require('./windows-kill');

module.exports = function (options) {
    if (os.platform() === 'win32') {
        return new WindowsKill(options);
    } else {
        return process.kill;
    }
};
