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
                test: /\.js$/i,
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-env"]
                }
            },
            // SVG
            {
                loader: 'svg-inline-loader',
                test: /\.svg$/i,
                exclude: /node_modules/,
            },
            // CSS
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    }
}