const CORE_IGNORE_LIST = [
  '.DS_Store',
  '.git',
  'node_modules',
  'package.json',
  '*.bak',
  '*.*.bak',
  '*.tmp',
  '*.swp'
]
const CORE_TYPE = {
	default: 'master',
}

const CORE_NAME = {
	webpack: webpack
}

module.exports = {
	CORE_TYPE,
	CORE_NAME,
	CORE_IGNORE_LIST,
}