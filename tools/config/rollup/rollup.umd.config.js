export default {
    entry: './build/index.js',
    dest: './dist/bundles/media-query.umd.js',
    format: 'umd',
    moduleName: 'media-query',
    external: [
        '@angular/core',
        '@angular/common',
        'rxjs'
    ]
}
