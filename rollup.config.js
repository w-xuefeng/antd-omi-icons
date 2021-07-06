import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import eslint from '@rollup/plugin-eslint'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import path from 'path'
import pkg from './package.json'

const getPath = (_path) => path.resolve(__dirname, _path)

const entry = './src/index.ts'
const extensions = ['.js', '.ts', '.tsx']

const tsPlugin = typescript({
  tsconfig: getPath('./tsconfig.json'),
})

const esPlugin = eslint({
  throwOnError: true,
  include: ['src/**/*.ts'],
  exclude: ['node_modules/**', 'lib/**'],
})

const babelPlugin = babel({
  exclude: 'node_modules/**',
  babelHelpers: 'runtime',
})

const commonConfig = {
  input: getPath(entry),
  external: ['omi'],
  plugins: [
    resolve({ extensions }),
    commonjs(),
    babelPlugin,
    esPlugin,
    tsPlugin,
  ],
}

const commonOutputOptions = {
  globals: {
    omi: 'Omi',
  },
  exports: 'auto',
}

const outputMap = [
  {
    file: pkg.main,
    format: 'cjs',
  },
  {
    file: pkg.module,
    format: 'es',
  },
]

const buildConfig = (options) => Object.assign({}, commonConfig, options)

export default outputMap.map((output) =>
  buildConfig({
    output: {
      name: pkg.name,
      ...commonOutputOptions,
      ...output,
    },
  })
)
