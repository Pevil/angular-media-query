import nodeResolve from 'rollup-plugin-node-resolve-angular';
import commonjs from 'rollup-plugin-commonjs';
import alias from 'rollup-plugin-alias';

export default {
  entry: 'demo/dist/main.js',
  sourceMap: true,
  moduleName: 'main',
  plugins: [
    commonjs({
      include: 'node_modules/**'
    }),
    alias({
        'angular-media-query': 'dist/angular-media-query.js'
    }),
    nodeResolve({
      es2015: true, jsnext: true, main: true
    })
  ]
};