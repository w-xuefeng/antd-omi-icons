const path = require('path')
const resolve = _path => path.resolve(__dirname, _path)

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: resolve('./tsconfig.json'),
    tsconfigRootDir: resolve('./'),
    sourceType: 'module',
  },
  rules: {
    indent: 'off',
    'no-unused-vars': 'off',
    'no-restricted-globals': 'off',
    'no-console': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },
}