import { Message, MessageBox } from 'element-ui'
/**
 * 动态插入css
 */

export const loadStyle = url => {
  const link = document.createElement('link')
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = url
  const head = document.getElementsByTagName('head')[0]
  head.appendChild(link)
}
/**
 * 设置浏览器头部标题
 */
export const setTitle = function (title) {
  title = 'OCR'
  window.document.title = title
}

// 提示框
export function message(title, type) {
  Message({
    showClose: true,
    message: title,
    type: type
  });
}
