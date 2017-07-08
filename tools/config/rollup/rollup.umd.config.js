export default {
    entry: './build/index.js',
    dest: './dist/bundles/angular-media-query.umd.js',
    format: 'umd',
    moduleName: 'angular-media-query',
    external: [
        '@angular/core',
        '@angular/common',
        'rxjs'
    ]
}
