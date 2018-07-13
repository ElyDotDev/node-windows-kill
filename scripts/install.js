var os = require('os');
var cp = require('child_process');

if (os.platform() === 'win32') {
    var result = cp.spawnSync('npm.cmd', ['run', 'install-native'], {
        stdio: 'inherit'
    });

    if (result.status !== 0 || result.stderr !== null || result.signal !== null) {
        throw new Error('An issue occured during installing native module.');
    }
}

