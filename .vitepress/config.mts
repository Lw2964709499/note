import { defineConfig } from "vitepress";
import { defineTeekConfig } from "vitepress-theme-teek/config";

import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons"; // 导入代码组图标插件
import timeline from "vitepress-markdown-timeline"; // 导入时间线插件
import { Nav } from "./ConfigHyde/Nav"; // 导入Nav模块
import type { HeadConfig } from "vitepress"; // 在文件顶部添加类型导入
import { HeadData } from "./ConfigHyde/Head"; // 导入 HeadData 导入和类型断言
import { SocialLinks } from "./ConfigHyde/SocialLinks"; //导入社交链接配置
import { FooterGroup } from "./ConfigHyde/footerGroup"; //导入页脚信息组配置
import { Wallpaper } from "./ConfigHyde/Wallaper"; // 导入Wallaper模块
const description = [
  "欢迎来到 vitepress-theme-teek 使用文档",
  "Teek 是一个基于 VitePress 构建的主题，是在默认主题的基础上进行拓展，支持 VitePress 的所有功能、配置",
  "Teek 拥有三种典型的知识管理形态：结构化、碎片化、体系化，可以轻松构建一个结构化知识库，适用个人博客、文档站、知识库等场景",
].toString();
const CoverImgList = Wallpaper; // 获取壁纸列表

// Teek 主题配置
const teekConfig = defineTeekConfig({
  backTopDone: (TkMessage) =>
    TkMessage.success({
      message: "已达到顶部🎉",
      duration: 3000,
    }),
  toCommentDone: (TkMessage) =>
    TkMessage.success({
      message: "已达到评论区✨",
      duration: 3000,
    }),
  // 新版代码块配置
  codeBlock: {
    disabled: false, // 是否禁用新版代码块
    collapseHeight: 700, // 超出高度后自动折叠，设置 true 则默认折叠，false 则默认不折叠
    copiedDone: (TkMessage) => TkMessage.success("代码已复制 🎉"),
  },
  page: {
    pageSize: 16, // 每页显示的文章数量
  },
  post: {
    coverImgMode: "full", // 封面图模式，default 为默认，full 为全图
    showMore: true, // 是否显示更多按钮
  },
  author: { name: "Wg", link: "https://github.com/Lw2964709499/note" }, // 作者信息
  articleAnalyze: {
    imageViewer: { hideOnClickModal: true }, // 图片预览是否点击遮罩层关闭}
    showIcon: true, // 作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息的图标是否显示
    dateFormat: "yyyy-MM-dd", // 文章日期格式，首页和文章页解析日期时使用
    showInfo: true, // 是否展示作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息，分别作用于首页和文章页
    showAuthor: false, // 是否展示作者
    showCreateDate: true, // 是否展示创建日期
    showUpdateDate: true, // 是否展示更新日期，是否展示更新时间，仅在文章页显示
    showCategory: true, // 是否展示分类
    showTag: true, // 是否展示标签
  },
  // 超过半年的文章自动提示文章内容可能已过时
  articleTopTip: (frontmatter) => {
    const tip: Record<string, string> = {
      type: "warning",
      text: "文章发布较早，内容可能过时，阅读注意甄别。",
    };
    // 大于半年，添加提示
    const longTime = 6 * 30 * 24 * 60 * 60 * 1000;
    if (
      frontmatter.date &&
      Date.now() - new Date(frontmatter.date).getTime() > longTime
    )
      return tip;
  },
  vitePlugins: {
    sidebarOption: {
      initItems: false, //这条命令注释后，才会让文档和目录的样式保持一致
      collapsed: true, //打开侧边栏自动收缩功能
      // ignoreList: ["nav"], //忽略的文件夹和文件
      ignoreWarn: true, // 忽略警告
    },
    autoFrontmatter: true, // 自动生成 frontmatter
    permalinkOption: {
      notFoundDelayLoad: 1000, // 1秒后加载
    },

    autoFrontmatterOption: {
      exclude: { title: true, date: true }, // 排除自动生成字段
      transform: (frontmatter) => {
        // 如果文件本身存在了 coverImg，则不生成
        if (frontmatter.coverImg) return; // 随机获取 coverImg

        const list = CoverImgList;

        const coverImg = list[Math.floor(Math.random() * list.length)];

        const transformResult = { ...frontmatter, coverImg };

        return Object.keys(transformResult).length
          ? transformResult
          : undefined;
      },
    },
  },

  markdown: {
    config: (md) => {
      md.use(timeline); //时间线插件
      md.use(groupIconMdPlugin); // 代码组图标插件
    },
  },
  articleShare: { enabled: true }, // 文章分享
  footerGroup: FooterGroup, // 页脚信息组配置
  // 精选文章卡片
  topArticle: {
    enabled: true, // 是否启用精选文章卡片
    limit: 5, // 一页显示的数量
    autoPage: false, // 是否自动翻页
    pageSpeed: 4000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
    dateFormat: "yyyy-MM-dd", // 精选文章的日期格式
  },
  themeSize: "large",
  articleBottomTip: () => {
    return {
      type: "tip",
      title: "声明",
      text: `<p>作者：Wg</p>
             <p>版权：此文章版权归 Wg 所有，如有转载，请注明出处!</p>
             <p style="margin-bottom: 0">链接：可点击右上角分享此页面复制文章链接</p>
            `,
    };
  },
});

// https://vitepress.dev/reference/site-config

export default defineConfig({
  extends: teekConfig,
  base: "/note/",
  title: "Wg Blog",
  description: description,
  cleanUrls: true,
  lastUpdated: true, // 显示最后更新时间
  lang: "zh-CN",
  head: HeadData as HeadConfig[],
  markdown: {
    // 开启行号
    lineNumbers: true,
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
    // 更改容器默认值标题
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/favicon.ico",
    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "上次更新时间",
    outline: {
      level: [2, 4],
      label: "本页导航",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: Nav, // 导航栏配置
    socialLinks: SocialLinks, // 社交链接配置
    search: {
      provider: "local",
    },
  },

  vite: {
    plugins: [groupIconVitePlugin()],
    build: {
      chunkSizeWarningLimit: 1500, // 限制警告的块大小
      assetsInlineLimit: 4096, // 小于 4KB 的字体转为 base64
      minify: "terser", // 使用 Terser 进行代码压缩
      rollupOptions: {
        output: {
          manualChunks: {
            theme: ["vitepress-theme-teek"],
          },
        },
      },
      terserOptions: {
        compress: {
          drop_console: true, // 移除所有 console.* 调用（生产环境建议开启）
          drop_debugger: true, // 移除 debugger 语句（生产环境必备）
          pure_funcs: ["console.info"], // 保留 console.info 调用（白名单机制）
          dead_code: true, // 移除不可达代码（消除死代码）
          arrows: true, // 将 function 转换为箭头函数（优化代码体积）
          unused: true, // 移除未使用的变量/函数（需确保不影响程序逻辑）
          join_vars: true, // 合并连续 var 声明（优化作用域）
          collapse_vars: true, // 内联单次使用的变量（体积优化）
        },
        format: {
          comments: false, // 移除所有注释（保留版权声明需使用正则表达式）
          beautify: false, // 禁用代码美化（进一步减小体积）
          preamble: "/* 项目版本 1.0.0 */", // 文件头部添加版权声明（需遵守 MIT 协议）
        },
        mangle: {
          toplevel: true, // 混淆顶级作用域变量名（保留 class/function 名称）
          properties: false, // 保留对象属性名（防止破坏 DOM 属性绑定）
        },
      },
    },
  },
});
