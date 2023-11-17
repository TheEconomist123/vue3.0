//导入axios

import axios from 'axios'

//定义一个公共请求的前缀

const baseURL = "http://localhost:8089/easyexcel";
const instance = axios.create({baseURL});

//添加响应拦截器
instance.interceptors.response.use(function (response) {
   // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;

}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
})

export default  instance;
