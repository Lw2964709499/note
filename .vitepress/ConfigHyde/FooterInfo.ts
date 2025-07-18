// 底部信息配置
import { version } from "vitepress-theme-teek/es/version"; // 导入版本号

export const FooterInfo = {
  topMessage: [
    `<span><img alt="VitePress" src="https://liuyuyang.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanimals.65eaf6e3.webp&w=750&q=75"><span/>`,

    `<a target="_blank" href="https://vitepress.dev/" title="本站框架基于 VitePress_v1.6.3" ><img alt="VitePress" src="https://img.shields.io/badge/Frame-VitePress-4868C2?logo=vitepress&amp;logoColor=fff" ></a>
    <a target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" title="本站内容采用 CC BY-NC-SA 4.0 国际许可协议进行许可"><img alt="Copyright" src="https://img.shields.io/badge/Copyright-BY--NC--SA%204.0-d42328?logo=coursera&amp;logoColor=fff"></a>
    <a target="_blank" href="https://www.algolia.com/" title="本站搜索服务使用 Algolia"><img alt="Algolia" src="https://img.shields.io/badge/Search-Algolia-3095FA?logo=Algolia"></a>`
  ],
  theme: {
    name: `Theme By Teek@${version}-2025-06-03`,
  },
  bottomMessage: [
    `<script id="LA-DATA-WIDGET" crossorigin="anonymous" charset="UTF-8" src="https://v6-widget.51.la/v6/3MQCwI1AgSSiVg37/quote.js?theme=0&f=12"></script>`,
    `<span id="runtime"></span>(●'◡'●)`,
    "人心中的成见是一座大山~",
  ],
  copyright: {
    createYear: 2025,
    suffix: "Wg Blog",
  },
  customHtml: ``, // 搭配 ./theme/composables/useRuntime.ts
};
