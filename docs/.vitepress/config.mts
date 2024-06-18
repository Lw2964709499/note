import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FrontEnd-Blog",
  description: "前端开发随笔",
  base: '/note/',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
    lastUpdated: {
      text: '最后更新时间',
      formatOptions: {
        dateStyle: 'short',
      }
    },
    sidebar: [
      {
        text: `React`,
        collapsed: false,
        items: [
          { text: 'React-learn', link: '/react/index' },
          { text: '类组件', link: '/react/classComponent' },
          { text: 'Hooks', link: '/react/hooks' },
        ]
      },
      {
        text: `工程化`,
        collapsed: false,
        items: [
          { text: '模块化', link: '/engineer/module' },
          { text: '包管理器', link: '/engineer/package' },
          { text: '语言解决方案', link: '/engineer/solution' },
          { text: '构建工具', link: '/engineer/buildTool' },
        ]
      },
      {
        text: `浏览器`,
        collapsed: false,
        items: [
          { text: '事件循环', link: '/browser/event-loop' },
          { text: '渲染原理', link: '/browser/render' },
          { text: '跨域请求', link: '/browser/cros' },
        ]
      },
      {
        text: `计算机基础`,
        collapsed: false,
        items: [
          { text: '网络', link: '/common/network' },
        ]
      }
    ],
    outline: {
      level: [1, 5]
    },
    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/god2964709499/note/tree/master' }
    ]
  },
  markdown: {
    lineNumbers: true,
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  }
})
