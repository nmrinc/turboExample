const base = require('eslint-config-custom/jest-next')

module.exports = {
  ...base,
  rootDir: '.',
  moduleNameMapper: {
    '\\.module\\.css': 'identity-obj-proxy',
  },
}
