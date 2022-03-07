const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',

	output: {
		filename: 'js/main.js',
		path: path.resolve(__dirname, 'public'),
	},

	plugins: [new MiniCssExtractPlugin({ filename: 'css/[name].css' })],

	optimization: {
		minimizer: [new CssMinimizerWebpackPlugin(), new TerserPlugin()],
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader, //3. extract css into files
					'css-loader', //2. converts css to js
					'postcss-loader', // prefix
					//'sass-loader', //1. turns scss to css
				],
			},
		],
	},
});
