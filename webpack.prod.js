/*
* @Author: moon
* @Date:   2019-06-03 14:57:25
* @Last Modified by:   moon
* @Last Modified time: 2019-06-03 15:04:26
*/



const merge = require('webpack-merge');
const common = require('./webpack.commmon.js');

module.exports = merge(common, {
	mode: 'production'
});

