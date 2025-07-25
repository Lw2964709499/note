// FriendLink用于在首页展示一些友链
export const FriendLink = {
  enabled: true, // 是否启用友情链接卡片
  limit: 5, // 一页显示的数量
  autoScroll: true, // 是否自动滚动
  scrollSpeed: 2500, // 滚动间隔时间，单位：毫秒。autoScroll 为 true 时生效
  autoPage: true, // 是否自动翻页
  pageSpeed: 4000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
  titleClick: (router) => router.go("/websites"), // 查看更多友链
  // 友情链接数据列表
  list: [
    {
      avatar: "https://vitepress.dev/vitepress-logo-mini.svg",
      name: "VitePress",
      desc: "✨VitePress 是一个静态站点生成器 (SSG)，专为构建快速、以内容为中心的站点而设计",
      link: "https://vitepress.dev/zh/guide/what-is-vitepress",
    },
    {
      avatar: "https://vp.teek.top/teek-logo-large.png",
      name: "Teek VitePress主题",
      desc: "✨一个轻量、简洁高效、灵活配置、易于扩展的 VitePress 主题。",
      link: "https://vp.teek.top/",
    },
    {
      avatar: "https://teek.seasir.top/favicon.ico",
      name: "Hyde Blog",
      desc: "✨一个基于VitePress 主题 的博客。",
      link: "https://teek.seasir.top/",
    },
  ],
};
