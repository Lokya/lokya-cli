const chalk = require('chalk');

function start() {
  console.log(chalk.blueBright(`
  _       _                
 | | ___ | | ___   _  __ _ 
 | |/ _ \\| |/ / | | |/ _  |
 | | (_) |   <| |_| | (_| |
 |_|\\___/|_|\\_\\__,  \|\\__,_|
               |___/   
  `))
  console.log('See --help for a list of available commands.')
}

module.exports = start;