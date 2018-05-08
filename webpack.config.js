const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
//webpack默认只能转换一些.js文件
module.exports = {
	mode: "development", //标注是开发环境development还是生产环境production
	entry: path.join(__dirname, './src/main.js'),
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			//配置Babel来转换高级语法
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/ //排除node_modules下面的所有文件
			},
			//配置转化.css文件
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			//配置转换url  处理css文件中的url地址  图片
			{
				test: /\.(png|jpg|gif)$/, //打包 url请求的资源文件
				use: 'url-loader?limit=20000' //limit表示图片的大小为20K是临界值，小于20K的图片会转化为base64的字符串，反之不会
			},
			//配置转换url  处理css文件中的url地址 字体
			{
				test: /\.(ttf|eot|svg|woff)$/,
				use: 'url-loader'
			},
			//配置转换.vue文件
			{
				test: /\.vue$/, // 解析 .vue 组件页面文件
				use: 'vue-loader'
			},
		]
	},
	// resolve: {
	// 	alias: {
	// 		"vue$": "vue/dist/vue.js" //修改Vue被导入时候包的路径
	// 	}
	// },
	//所有的插件都要写在plugins:[]里面
	plugins: [
		//作用：根据index.html生成一个内存中的首页  在内存中生成HTML页面的插件
		new htmlWebpackPlugin({ //创建一个在内存中  生成HTML页面的插件
			template: path.join(__dirname, './src/index.html'), //指定模板页面 ，将来会根据指定的页面路径，生成内存中的页面
			filename: 'index.html' //指定生成的页面的名称  输出文件的文件名称，默认为index.html，不配置就是该文件名
		}),
		new VueLoaderPlugin()
	]
}