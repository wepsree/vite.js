module.exports = {
    'compilerOptions': {
        'allowSyntheticDefaultImports': true,
        'allowJs': true,
        'target': 'es5',
        'module': 'commonjs',
        'noImplicitAny': false,
        'removeComments': true,
        'preserveConstEnums': true,
        'sourceMap': true,
        'moduleResolution': 'node',
        'resolveJsonModule': true,
        'baseUrl': './src',
        'lib': [
            'es5',
            'es2017',
            'es2015',
            'es2017.typedarrays'
        ],
        'outDir': './dist'
    },
    'include': [
        'src/*'
    ],
    'exclude': [
        'node_modules',
        '**/*.spec.ts'
    ]
};