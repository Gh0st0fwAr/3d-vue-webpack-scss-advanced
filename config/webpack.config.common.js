'use strict';

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const helpers = require('./helpers');
const TerserPlugin = require('terser-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin")

const webpackConfig = {
	entry: {
		polyfill: '@babel/polyfill',
		main: helpers.root('src', 'main'),
	},
	resolve: {
		extensions: ['.js', '.vue'],
		alias: {
			'vue$': isDev ? 'vue/dist/vue.runtime.js' : 'vue/dist/vue.runtime.min.js',
			'@': helpers.root('src')
		}
	},
	module: {
		rules: [{
				test: /\.vue$/,
				loader: 'vue-loader',
				include: [helpers.root('src')]
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [helpers.root('src')]
			},
			{
				test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						// outputPath: 'fonts/',
						sourceMap: isDev
					}
				}]
			},
			{
				test: /\.scss$/i,
				use: [
					// isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: isDev
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: isDev
						}
					}
				]
			},
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlPlugin({
			template: 'index.html',
			chunksSortMode: 'none'
		}),
		new GoogleFontsPlugin({
			fonts: [
				{family: "Roboto", variants: ["300", "400", "500", "bold"]}
			],
			options: {
				name: "fonts",
				filename: "fonts.css",
				formats: ["woff", "woff2", "ttf"],
				path: "fonts/",
				local: true
			}
		})
	]
};

module.exports = webpackConfig;
