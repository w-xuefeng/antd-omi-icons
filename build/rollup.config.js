import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import path from 'path'
import { indexEntry, extensions, iconTargetPath, componentTargetPath } from './config.js'
import { iconsEntries, componentsEntries } from './entries.js'
import getPkg from './pkg.js'

const pkg = getPkg()

const getPath = (p) => path.resolve(p)

const tsPlugin = typescript({
  tsconfig: getPath('./tsconfig.json'),
})

const babelPlugin = babel({
  exclude: 'node_modules/**',
  babelHelpers: 'runtime',
})

const deps = Object.keys(pkg.dependencies)

const externalFiles = componentsEntries().map((comp) => comp.path)

const commonConfig = (entry = indexEntry) => ({
  input: getPath(entry),
  external: [...deps, ...externalFiles, 'omi'],
  plugins: [resolve({ extensions }), commonjs(), babelPlugin, tsPlugin],
})

const commonOutputOptions = {
  globals: {
    omi: 'Omi',
  },
  exports: 'auto',
}

const outputMap = (cjsFile = pkg.main, esFile = pkg.module) => [
  {
    file: cjsFile,
    format: 'cjs',
  },
  {
    file: esFile,
    format: 'es',
  },
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
const iconsOutput = iconsEntries().reduce(
  (total, icon) => [
    ...total,
    ...outputMap(
      `${iconTargetPath('cjs')}/${icon.name}.js`,
      `${iconTargetPath('es')}/${icon.name}.js`
    ).map((output) =>
      buildConfig(
        {
          output: {
            name: pkg.name,
            ...commonOutputOptions,
            ...output,
          },
        },
        icon.path
      )
    ),
  ],
  []
)
const componentsOutput = componentsEntries().reduce(
  (total, comp) => [
    ...total,
    ...outputMap(
      `${componentTargetPath('cjs')}/${comp.name}.js`,
      `${componentTargetPath('es')}/${comp.name}.js`
    ).map((output) =>
      buildConfig(
        {
          output: {
            name: pkg.name,
            ...commonOutputOptions,
            ...output,
          },
        },
        comp.path
      )
    ),
  ],
  []
)

// export default [...indexOutput, ...iconsOutput, ...componentsOutput]

export default iconsOutput[1]
