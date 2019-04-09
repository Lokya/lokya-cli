#!/usr/bin/env node

const program = require('commander');
// 读取package.json 数据
const pkg = require('../package.json');
// 读取开始界面
const start = require('../packages/commands/start')

const init = require('../packages/commands/init')

// 版本查看和cli start
program
	.version(pkg.version, '-v, --version')
	.command('start')
	.description('display welcome page')
	.action(start);

// 初始化
program
  .command('init')
  .description('initial a lokya project in current directory')
	.option('-n, --no-install', 'Install dependencies after project create, default: true')
	.option('-ir, --ireact', 'Install a react project')
  .action(function(cmd) {
    init('.', cmd);
  });

program.parse(process.argv);

if (program.args.length === 0) {
  start();
}