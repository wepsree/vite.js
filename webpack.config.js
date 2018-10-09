const path = require('path');


// [TODO] vendor
let webpackConfig = {
    mode: 'production',
    entry: {
        index: path.join(__dirname, 'src/index.js')
    },
    module: {
        rules:[{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        [
                            '@babel/plugin-transform-runtime',
                            {
                                'corejs': false,
                                'helpers': true,
                                'regenerator': true,
                                'useESModules': false
                            }
                        ]
                    ],
                }
            }
        }]
    },
};

module.exports = webpackConfig;
