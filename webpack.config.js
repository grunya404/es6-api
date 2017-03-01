const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './app/index.js',
	output: {
		path: path.join(__dirname, 'app'),
		filename: 'bundle.js'
	},
	devtool: 'eval',
	devServer: {
		inline: true,
		port: 3000,
		hot: true
	},
	eslint: {
		configFile: './.eslintrc'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './templates/index.template.html',
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
				loaders: ['babel', 'eslint-loader'],
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