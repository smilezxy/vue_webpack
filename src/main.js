import Vue from "../node_modules/vue/dist/vue.js"
//import Vue from 'vue' //单独这样  只引入runtime-only的方式   需要在webpack.config.js中配置resolve:{
//    alias:{"vue$":"vue/dist/vue.js"  //修改Vue被导入时候包的路径}}

import login from "./login.vue"


new Vue({
	el: '#app',
	// render:function(create){create(App)} //es5的写法
	render: c => c(login)
});