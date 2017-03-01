const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'source-map',

	entry: './src/client/app/index.js',

	output: {
		path: "./public",
		publicPath: "./",
		filename: 'bundle.js'
	},

	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new HtmlWebpackPlugin({
			template: './src/client/templates/index.template.html',
			inject: true,
		})
	],

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.js?$/,
				loader: 'babel',
				exclude: path.join(__dirname, 'node_modules')
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.scss?$/,
				loaders: ['style', 'css', 'sass']
			},
			{
				test: /\.png$/,
				loader: 'file'
			},
			{
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: 'file'
			}
		]
	}
};