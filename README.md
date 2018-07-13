# node-windows-kill
Enhance node's process.kill to support signals in Windows

## Installation
```
$ npm install windows-kill
```

## Features
* No code change is needed. Just old ```process.kill``` calls.
* Support Both x86 & x64 Windows
* No effect on ***Non Windows*** operation systems (Linux, Mac OS X, ...)
* Support both ```SIGINT``` and ```SIGBREAK``` (Just the two signals that are available on Windows)

## Why windows-kill?
Sending signal to another process, just by knowing it's PID, is not availabe at Windows OS. It's a UNIX-like feature. But, sending signal to other process, for telling it that something is going to happen to you, is a way to give other process some time for gracefull shutdown/restart. windows-kill tries to fix this issue by bringing the ability to send signals, ```SIGINT``` and ```SIGBREAK```, to another process by PID.

## Usage
```windows-kill``` expose a function. Simply run the exposed function with/without the options. Thats it. It should be called before any usage of ```process.kill```.

By default, ```windows-kill``` will enhance the node's process.kill in a way, that no code changes are needed in your codebase. Ehnance means that ```windows-kill``` will replace the node's ```process.kill``` with a custom function with the same arguments and behaviour. Just some changes to acheive signaling in Windows.

### Simplest usage
```javascript
require('windows-kill')();

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
