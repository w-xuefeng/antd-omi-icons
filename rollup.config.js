import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import path from 'path'
import pkg from './package.json'

const getPath = (p) => path.resolve(p)

const tsPlugin = typescript({
  tsconfig: getPath('./tsconfig.json'),
})

const babelPlugin = babel({
  exclude: 'node_modules/**',
  babelHelpers: 'runtime',
})

const deps = Object.keys(pkg.dependencies)

const commonConfig = (entry = 'src/index.ts') => ({
  input: getPath(entry),
  external: [...deps, 'omi'],
  plugins: [
    resolve({ extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'] }),
    commonjs(),
    babelPlugin,
    tsPlugin,
  ],
})

const commonOutputOptions = {
  globals: {
    omi: 'Omi',
  },
  exports: 'auto',
}

const outputMap = (/** cjsFile = pkg.main, esFile = pkg.module **/) => [
  {
    file: pkg.browser,
    format: 'umd',
    plugins: [terser()],
  },
  // {
  //   file: cjsFile,
  //   format: 'cjs',
  // },
  // {
  //   file: esFile,
  //   format: 'es',
  // },
]

const buildConfig = (options, entry = indexEntry) =>
  Object.assign({}, commonConfig(entry), options)

const indexOutput = outputMap().map((output) =>
  buildConfig({
    output: {
      name: pkg.name,
      ...commonOutputOptions,
      ...output,
    },
  })
)

export default indexOutput
