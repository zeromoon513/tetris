/*
* @Author: moon
* @Date:   2019-06-03 14:56:58
* @Last Modified by:   moon
* @Last Modified time: 2019-06-03 15:35:55
*/



const merge = require('webpack-merge');
const common = require('./webpack.commmon.js');
const webpack = require('webpack');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
});

