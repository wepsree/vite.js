const path = require('path');
const webpack = require('webpack');

const baseDir = path.resolve(process.cwd(), './src');
const target = process.env.build_target;
const Buffer_Path = path.join(__dirname, '../node_modules/buffer/index.js');

module.exports = {
    plugins:[
        new webpack.NormalModuleReplacementPlugin(/\/buffer\//, function(resource) {
            resource.request = Buffer_Path;
        }),
        new webpack.NormalModuleReplacementPlugin(/\/parse-asn1\//, function(resource) {
            resource.request = 'fixed-parse-asn1';
        }),
        new webpack.DefinePlugin({
            'processSilence': process.env.NODE_ENV && process.env.NODE_ENV.indexOf('test') === 0 ? 0 : 1
        }),
    ],
    target,
    mode: 'production',
    entry: {
        index: path.resolve(baseDir, './index.ts')
    },
};
