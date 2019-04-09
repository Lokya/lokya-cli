const fs = require('fs');
const readline = require('readline');
const which = require('which');
const chalk = require('chalk');


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

function writeFile(destPath, content, mode = 0644) {
  fs.writeFileSync(destPath, content, { mode });
  console.log(chalk.green(`create: ${destPath}`));
}

function confirm (msg, callback) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(msg, function (input) {
    rl.close();
    callback(/^y|yes|ok|true$/i.test(input));
  });
}


module.exports = {
	emptyDir,
	finPackager,
	findGit,
	writeFile,
	confirm,
};