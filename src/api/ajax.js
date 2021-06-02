/*
ajax请求函数模块;
返回值为promise对象；异步返回的数据是response.data
*/
// 导入三方请求库
import axios from 'axios'
// 发送请求必须传三个参数：请求地址、请求数据（返回的是一个对象形式）、请求方式
export default function ajax(url, data = {}, type = 'GET') {
  // promise对象函数必须传两个参数：resolve成功的回调、reject失败的回调
  return new Promise(function(resolve, reject) {
    // 执行异步ajax请求
    let promise
    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }
    // .then成功的回调函数
    promise.then(function(response) {
      // 请求成功调用resolve()
      resolve(response.data)  // 请求成功返回数据中的data对象
    }).catch(function(error) {
        // 失败调用reject()
        reject(error)
    })
  });
}

