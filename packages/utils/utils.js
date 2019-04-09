const fs = require('fs');
const which = require('which');

// 检测文件夹是否为空
function emptyDir(path, fn) {
	fs.readdir(path, function (err, files = []) {
		if(err) throw err
		fn(!files.length);
	})
}

// 判断包管理器是否存在
function finPackager() {
	const binList = process.platform === 'win32' ? ['yarn.cmd', 'tnpm.cmd', 'cnpm.cmd', 'npm.cmd'] : ['yarn', 'tnpm', 'cnpm', 'npm'];
	for(let i = 0; i < binList.length; i++) {
		try {
			which.sync(binList[i]);
			return binList[i];
		} catch (e) {
		}
	}
	throw new Error('please checkout yarn or npm was installed in this computer!');
}

// 判断包git是否存在
function findGit() {
	const git = process.platform === 'win32' ? 'git.cmd' : 'git';
	try {
		const found = which.sync(git);
		return found;
	} catch (e) {
	}
	throw new Error('please install git!');
}


module.exports = {
	emptyDir,
	finPackager,
	findGit,
};