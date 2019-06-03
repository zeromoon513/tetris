/*
* @Author: moon
* @Date:   2019-06-03 15:00:20
* @Last Modified by:   moon
* @Last Modified time: 2019-06-03 15:28:07
*/



const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'index.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: '俄罗斯方块测试版'
		}),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.(png|jpg|jpeg|svg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	}
};

