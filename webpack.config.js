const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        filename: 'canvasturtle.js',
        path: path.join(__dirname, 'dist')
    },

    module: {
        rules: [
            // Babel
            {
                loader: 'babel-loader',
                test: /.js$/,
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
        ]
    }
}