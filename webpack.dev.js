const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
	mode: 'development',

	output: {
		filename: 'js/main.js',
		path: path.resolve(__dirname, 'public'),
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader', //3 inject dom,
					'css-loader', //2.converts css to js
					'postcss-loader', //.prefix
					//'sass-loader', //1.turns scss to css
				],
			},
		],
	},
});
