'use strict'
import axios from 'axios'
var instance = axios.create({
    baseURL: 'http://www.forwork.cn',
    timeout: 2000
})
instance.defaults.transformRequest = [function (data) {
    return JSON.stringify(data)
}]

instance.defaults.validateStatus = function (status) {
    // console.log(status)
    return true;
}

instance.interceptors.request.use(config => {
    config.headers.Accept = 'application/json';
    config.headers['Content-Type'] = 'application/json';
    return config
}, err => {
    return Promise.reject(err)
})

instance.interceptors.response.use(res => {
    // console.log(res)
    if (res.status == 200) {
        return Promise.resolve(res)
    } else {
        return Promise.reject(res)
    }
}, err => {
    return Promise.reject(err)
})

let requestMethod = ['get', 'post', 'delete', 'put', 'patch', 'update']

let requester = {}

requestMethod.forEach(method => {
    requester[method] = function (url = '', data = {}, config = {}) {
        return new Promise((resolve, reject) => {
            instance[method](url, data, config).then(response => {
                return resolve(response)
            }).catch(res => {
                return reject(res)
            })
        })
    }
})

export default requester;