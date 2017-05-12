var webpack = require('webpack');
var path = require('path');

var config = {
	entry: './app/main.jsx',
    output: {
        path: path.resolve(__dirname, './js'),
        filename: 'bundle.js',
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
	plugins: [
		// new webpack.DefinePlugin({
		// 	'process.env': {
		// 		'NODE_ENV': JSON.stringify('production')
		// 	}
		// }),
		//该插件可以解决material-ui的
		// new webpack.optimize.UglifyJsPlugin({
		// 	debug: true,
		// 	minimize: true,
		// 	sourceMap: false,
		// 	output: {
		// 		comments: false
		// 	},
		// 	compressor: {
		// 		warnings: false
		// 	}
		// }),
    ],
};

module.exports = config;
