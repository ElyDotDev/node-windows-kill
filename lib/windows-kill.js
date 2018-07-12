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

    this.shouldReplaceNodesKill = true;
    if (options && options.hasOwnProperty('replaceNodeKill') && (options.replaceNodeKill === false || options.replaceNodeKill === true)) {
        this.shouldReplaceNodesKill = options.replaceNodeKill;
    }

    if (this.shouldReplaceNodesKill) {
        this._replaceNodeKill();
    }
};

WindowsKill.prototype._replaceNodeKill = function () {
    var self = this;
    process.kill = function (pid, signal) {
        self.kill(pid, signal);
    }
}

WindowsKill.prototype.kill = function (pid, signal) {
    if (supportedSignals.indexOf(signal) >= 0) {
        if (pid != (pid | 0)) {
            throw new TypeError('invalid pid.');
        }

        error = this._native.send(pid, supportedSignalsAsNumber[signal]);
        if (error) {
            throw new Error('windows-kill ' + error);
        }
    } else {
        this._nodeKill(pid, signal);
    }
};

module.exports = WindowsKill;
