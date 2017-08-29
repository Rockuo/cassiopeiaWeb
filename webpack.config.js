let path = require('path');

module.exports = {
    entry: path.join(__dirname, './client/main.js'),
    output: {
        path: path.join(__dirname, './public/dist'),
        filename: 'app.bundle.js'
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)(server)(public)(views)(bin)/,
                loader: 'babel-loader',
                options: {presets: ['es2015', 'stage-2'], plugins: ['transform-object-rest-spread']}
            },
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {presets: ['es2015', 'stage-2', 'react'], plugins: ['transform-object-rest-spread']}
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
};