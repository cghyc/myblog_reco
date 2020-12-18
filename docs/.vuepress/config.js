const themeConfig = require('./config/theme/')

module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  base: '/', // 这是部署到github相关的配置
  title: " cgh_yc的博客",
  description: '专注前端技术栈分享',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', { rel: 'stylesheet', href: '/css/style.css' }],
    // // 引入jquery
    // ["script", {
    //   "language": "javascript",
    //   "type": "text/javascript",
    //   "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
    // }],
    // // 引入鼠标点击脚本
    // ["script", {
    //   "language": "javascript",
    //   "type": "text/javascript",
    //   "src": "/js/MouseClickEffect.js"
    // }]
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart'] 
}  