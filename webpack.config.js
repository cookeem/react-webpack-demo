var path = require('path');
var webpack = require('webpack');

var config = {
	entry: './app/main.jsx',
    output: {
        path: path.resolve(__dirname, './js'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [ {
            test: /.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
		}]
    },
	plugins:[
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	]
};
module.exports = config;
