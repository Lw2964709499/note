---
title: 网站导航 #标题
date: 2025-03-25 18:21:52 #时间
layout: doc
layoutClass: m-nav-layout #导航布局
sidebar: false #是否显示侧边栏
themeSize: wide #主题宽度
themeStyle: vp-default #主题风格，默认
prev: false #是否显示上一篇
next: false #是否显示下一篇
categories: #分类
  - 导航
  - nav
article: false #是否显示文章
outline:
  - 2
  - 3
  - 4
coverImg: /home/bg18.webp
---

<style src="/.vitepress/theme/style/nav.scss"></style>

<script setup>
import { NAV_DATA } from '/.vitepress/theme/untils/data'
</script>

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>
::: tip 转载
  https://teek.seasir.top/nav/
:::
<confetti />
