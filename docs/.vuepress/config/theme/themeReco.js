module.exports = {
  type: 'blog',
  // 博客设置
  blogConfig: {
    category: {
      location: 2, // 在导航栏菜单中所占的位置，默认2
      text: '分类' // 默认 “分类”
    },
    tag: {
      location: 3, // 在导航栏菜单中所占的位置，默认3
      text: 'Tag' // 默认 “标签”
    }
  },
  // 最后更新时间
  lastUpdated: 'Last Updated', // string | boolean
  // 作者
  author: 'cgh_yc',
  // 备案号
  // record: '京ICP备17067634号-1',
  // 项目开始时间
  startYear: '2020',
  // mode: 'auto', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
  // modePicker: true // 默认 true，false 不显示模式调节按钮，true 则显示
}