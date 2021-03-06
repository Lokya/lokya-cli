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
	default: 'react',
}

const CORE_NAME = {
	code: "code"
}

module.exports = {
	CORE_TYPE,
	CORE_NAME,
	CORE_IGNORE_LIST,
}