const path = require('path'); 

module.exports = {
    mode: 'development', 
    entry: './src/food-app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test:/\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    }
}