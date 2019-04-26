import axios from 'axios'
import router from '../router'
import { Toast } from 'mint-ui'

const requestBeforeSend = (config) => {
  let token = null
  try {
    token = localStorage.getItem('token')
  } catch (ex) {
    console.log(ex)
  }
  if (token != null) {
    config.headers.Authorization = 'Bearer ' + token
  }

  return config
}

const requestError = (error) => {
  return Promise.reject(error)
}

const afterResponse = (response) => {
  switch (response.status) {
    case 404:
      // TODO: 捕获404错误
      console.log('response.data.resultCode是404')
      return response
    case 401:
      // TODO: 捕获401用户未认证错误，一般跳转到登录页
      localStorage.removeItem('token')
      router.replace({
        path: '/login',
        query: {redirect: router.currentRoute.fullPath}
      })
      return response
    default:
  }

  return response
}

const responseError = (ex) => {
  console.log('response error:::::::', ex.response)
  if (ex.response.status === 400) {
    Toast({
      duration: -1,
      message: '操作失败：' + ex.response.data.title
    })
  }
  return Promise.reject(ex.response)
}

/**
 * 为axios添加拦截器
 * @param enableRequestInterceptor 是否使用请求拦截器
 * @param enableResponseInterceptor 是否使用响应拦截器
 */
const init = (enableRequestInterceptor, enableResponseInterceptor) => {
  enableRequestInterceptor && axios.interceptors.request.use(requestBeforeSend, requestError)
  enableResponseInterceptor && axios.interceptors.response.use(afterResponse, responseError)
}

export default init
