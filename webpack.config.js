const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const {
	VueLoaderPlugin
} = require('vue-loader')

const path = require('path');

module.exports = {
	entry: {
		main: './src/main.js'
	},
	node: {
		fs: 'empty'
	},
	module: {
		rules: [{
				test: /\.(s*)css$/,
				use: ['style-loader', 'css-loader']
        	},
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.tsx?$/,
				use: {
					loader: "ts-loader",
					options: {
						transpileOnly: true
					}
				}
			},
			{
				test: /\.(txt)$/,
				use: [{
					loader: 'file-loader',
					options: {}
				}]
			}
		]
	},
	resolve: {
		modules: [
			path.resolve(__dirname, "src"),
			"node_modules"
		],
		alias: {
			vue: 'vue/dist/vue.js'
		},
		extensions: [".js", ".ts"]
	},
	plugins: [
		new MonacoWebpackPlugin(),
		new VueLoaderPlugin()
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	}
};