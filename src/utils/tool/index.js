
import moment from 'moment'

export default {
  // 传入日期,返回年月日
  dateFormat: (date, separator = '-') => {
    return moment(date).format(`YYYY${separator}MM${separator}DD`)
  },
  // 传入日期,返回年月日，时分秒
  secondFormat: (date, separator = '-') => {
    return moment(date).format(`YYYY${separator}MM${separator}DD HH:mm:ss`)
  },
  // 获取日期  默认获取当天日期，getTime('week') 获取本周开始日期；getTime('month') 本月开始日期，getTime('pre'),昨天日期
  getTime(type) {
    switch (type) {
        case 'week':
            var weekOfday = moment().format('E')
            return moment().add(-weekOfday + 1, 'days').format('YYYY-MM-DD') // 获取本周开始日期
        case 'pre':
            return moment().add(-1, 'days').format('YYYY-MM-DD') // 获取昨天日期
        case 'month':
            return moment().format('YYYY-MM-01') // 本月
        default:
            return moment().format('YYYY-MM-DD') // 默认获取当天日期
    }
  },
  // 下载文件函数
  downloadFile = (url, name = '文件', params={}) => {
    openLoading()
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.setRequestHeader('Authorization', `Bearer ${sessionStorage.Token}`);
    xhr.onload = () => {
      closeLoading()
      // 获取图片blob数据并保存
      let URL = window.URL || window.webkitURL
      let objectUrl = URL.createObjectURL(xhr.response)
      let a = document.createElement('a')
      a.style.display = 'none'
      a.href = objectUrl
      a.download = name
      document.body.appendChild(a)
      a.click()
      URL.revokeObjectURL(objectUrl)
      document.body.removeChild(a)
    };
    xhr.send(params)
  }
}

/**
 * @description 绑定事件 on(element, event, handler)
 */
export const on = (function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()

/**
 * @description 解绑事件 off(element, event, handler)
 */
export const off = (function () {
  if (document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()

/**
 * @description 获取窗口高度
 */
export const getClientHeight = () => {
  let clientHeight=0;
  if(document.body.clientHeight&&document.documentElement.clientHeight) {
      clientHeight = (document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
  } else {
      clientHeight = (document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
  }
  return clientHeight;
}