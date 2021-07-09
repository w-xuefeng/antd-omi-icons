import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import replace from '@rollup/plugin-replace';
import path from 'path'
import pkg from './package.json'

const getPath = (p) => path.resolve(p)

const indexEntry = 'src/index.ts'

const tsPlugin = typescript({
  tsconfig: getPath('./tsconfig.json'),
  declaration: false
})

const babelPlugin = babel({
  exclude: 'node_modules/**',
  babelHelpers: 'runtime',
})

const replacePlugin = replace({
  'process.env.NODE_ENV': process.env.NODE_ENV,
})

const deps = Object.keys(pkg.dependencies)

const commonConfig = (entry = indexEntry, externalDeps = true) => ({
  input: getPath(entry),
  external: externalDeps ? [...deps, 'omi'] : ['omi'],
  plugins: [
    resolve({ extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'] }),
    commonjs(),
    replacePlugin,
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

// const outputMap = (cjsFile = pkg.main, esFile = pkg.module) => [
//   {
//     file: cjsFile,
//     format: 'cjs',
//   },
//   {
//     file: esFile,
//     format: 'es',
//   },
// ]

const outputUMDMap = (umdFile = pkg.browser) => [
  {
    file: umdFile,
    format: 'umd',
    plugins: [terser()],
  },
]

const buildConfig = (
  options,
  buildOps = {
    entry: indexEntry,
    externalDeps: true,
  }
) =>
  Object.assign({}, commonConfig(buildOps.entry, buildOps.externalDeps), options)

const indexOutput = outputUMDMap().map((output) =>
  buildConfig(
    {
      output: {
        name: pkg.name,
        ...commonOutputOptions,
        ...output,
      },
    },
    {
      entry: indexEntry,
      externalDeps: false,
    }
  )
)

export default indexOutput