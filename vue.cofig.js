/*
 * @Author: 赵新朋
 * @Date: 2019-11-26 10:48:32
 * @LastEditors: 赵新朋
 * @LastEditTime: 2019-11-26 10:48:56
 * @Description: 
 */

//vue.config.js
 
module.exports = {
	//配置全局样式变量
	css: {
		loaderOptions: {
			sass: {
				data: `@import "@/assets/style/common/variables.scss";`
			}
		}
	}
}