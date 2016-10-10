import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'

export default {
  entry: 'src/export.js',
  dest: 'dist/bundle.js',
  format: 'cjs',
  plugins: [
    babel({
      babelrc: false,
      presets: [[ 'es2015', { modules: false } ], 'react']
    }),
    json(),
    commonjs()
  ]
}
