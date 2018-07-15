# node-windows-kill
[![Build Status](https://travis-ci.org/alirdn/node-windows-kill.svg?branch=master)](https://travis-ci.org/alirdn/node-windows-kill) [![Build status](https://ci.appveyor.com/api/projects/status/ckerpyyjyuxyoija?svg=true)](https://ci.appveyor.com/project/alirdn/node-windows-kill) [![codecov](https://codecov.io/gh/alirdn/node-windows-kill/branch/master/graph/badge.svg?)](https://codecov.io/gh/alirdn/node-windows-kill)

Enhance node's ```process.kill``` to support signals in Windows

## Installation
```
$ npm install windows-kill
```

## Features
* No code change is needed. Just old ```process.kill``` calls.
* Support Both x86 & x64 Windows
* No effect on ***Non Windows*** operation systems (Linux, Mac OS X, etc...)
* Support both ```SIGINT``` and ```SIGBREAK``` (Just the two signals that are available on Windows)

## Why windows-kill?
Sending signal to another process, just by knowing it's PID, is not available at Windows OS. It's a POSIX OSes feature. But, sending signal to other process, for telling it that something is going to happen to you, is a way to give other process some time for graceful shutdown/restart. windows-kill tries to fix this issue by bringing the ability to send signals, ```SIGINT``` and ```SIGBREAK```, to another process by **PID**.

## How it works?
To read a detailed info please visit [windows-kill-library Readme](https://github.com/alirdn/windows-kill/tree/master/windows-kill-library#how-it-works).

### Limitations
To send the signal, **windows-kill** at first send a same signal to the process that is calling it, to find a thread address. Then the founded address is used to send the real signal. Because of this, the process that is sending the signal will get the same signal too. But windows-kill register a signal handle during this procedure, so the process will not terminate. But if the process that is sending signal has child process, or is a child process of another process, sending signal will trigger the signal handles in other process in the same process group. And the default behavior of Windows console/application in case of getting a ```SIGINT``` or ```SIGBREAK```, is to terminate.
To **sum up**, If you are sending signal in node app that has child process (any kind of it), or is a child process of another process, the result is the termination of all the processes in the same process group, except the sender (well if it's a child process, because the master is terminated, it will terminate too).

**PS**: Currently there is no solution for this problem. But I'm working on it, to find a solution.

## Usage
```windows-kill``` expose a function. Simply run the exposed function with/without the options. Thats it. It should be called before any usage of ```process.kill```.

By default, ```windows-kill``` will enhance the node's process.kill in a way, that no code changes are needed in your codebase. Enhance means that ```windows-kill``` will replace the node's ```process.kill``` with a custom function with the same arguments and functionality. Just some changes to achieve signaling in Windows.

### Simplest usage
```javascript
var windowsKill = require('windows-kill')();

process.kill(PID, SIGNAL);
```

### Using Options
```javascript
const options = {
    replaceNodeKill: true // Should windows kill enhance/replace node's process.kill. Default: true
};

require('windows-kill')(options);

process.kill(PID, SIGNAL);
```

```javascript
const options = {
    replaceNodeKill: false // Should windows kill enhance/replace node's process.kill. Default: true
};

var windowsKill = require('windows-kill')(options);

windowsKill(PID, SIGNAL);
```

## Contributing
We love contributions from everyone. Please read [Contributing guide](https://github.com/alirdn/node-windows-kill/blob/master/CONTRIBUTING.md).

## License
[MIT](https://github.com/alirdn/node-windows-kill/blob/master/LICENSE)
