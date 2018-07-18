var WindowsKillClass = require('../lib/windows-kill-class');

var noop = function () { };

var defaultApplyOptions = WindowsKillClass.prototype._applyOptions;
WindowsKillClass.prototype._applyOptions = noop;

var windowsKill = new WindowsKillClass({
    warmUp: true
});

windowsKill._native.warmUp = noop;
WindowsKillClass.prototype._applyOptions = defaultApplyOptions;

windowsKill._applyOptions();

module.exports = windowsKill;
