/*
包含n个接口请求函数的模块
接口请求函数返回值 promise对象
*/
// 暴露多个接口不用加default


// 导入ajax请求函数模块
import ajax from "./ajax";

// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax( `/position/${geohash}`)
// 2、获取食品分类列表
export const reqFoodNav = () => ajax('/index_category')
// 3、根据经纬度获取商铺列表
export const reqShopList = (longitude, latitude) => ajax('/shop',{longitude, latitude})
// 4、根据经纬度和关键字搜索商铺列表
export const reqAddress = (geohash, keyword) => ajax('/search_shops',{geohash, keyword})
// 5、获取一次性验证码
export const reqAddress = () => ajax('/captcha')
// 6、用户名密码登陆
export const reqAddress = (name, pwd, captcha) => ajax('/login_pwd',{name, pwd, captcha})
// 7、发送短信验证码
export const reqAddress = (phone) => ajax('/sendcode',{})
// 8、手机号验证码登陆
export const reqAddress = (phone,code) => ajax('/login_sms')
// 9、根据会话获取用户信息
export const reqAddress = () => ajax('/userinfo')
// 10、用户登出
export const reqAddress = () => ajax('/logout')


