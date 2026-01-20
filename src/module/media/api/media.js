import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre

/* 页面列表 */
export const mediaList = (page, size, params) => {
  // params为json格式
  // 使用querystring将json对象转成key/value串
  let querys = querystring.stringify(params)
  return http.requestQuickGet(apiUrl + '/media/file/list/' + page + '/' + size + '/?' + querys)
}

/**
 * 触发视频处理
 */
export const mediaProcess = (id) => {
  return http.requestPost(apiUrl + '/media/file/process/' + id)
}
