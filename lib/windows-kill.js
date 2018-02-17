var supportedSignals = [
    'SIGBREAK',
    'SIGINT'
];

var supportedSignalsAsNumber = {
    'SIGBREAK': 1,
    'SIGINT': 2
}

function WindowsKill(options) {
    this._native = require('../build/Release/windows-kill.node');
    this._nodeKill = process.kill;

    var shouldReplaceNodesKill = true;
    if (options && options.hasOwnProperty('replaceNodeKill') && (options.replaceNodeKill === false || options.replaceNodeKill === true)) {
        shouldReplaceNodesKill = options.replaceNodeKill;
    }

    if (shouldReplaceNodesKill) {
        this._replaceNodeKill();
    }
};

WindowsKill.prototype.kill = function (pid, signal) {
    if (supportedSignals.indexOf(signal) >= 0) {
        if (pid != (pid | 0)) {
            throw new TypeError('invalid pid.');
        }
        error = this._native.send(pid, supportedSignalsAsNumber[signal]);
        if(error) {
        	throw new Error('windows-kill ' + error);
        }
    } else {
        this._nodeKill(pid, signal);
    }
};

WindowsKill.prototype._replaceNodeKill = function () {
    process.kill = this.kill;
}

module.exports = WindowsKill;
