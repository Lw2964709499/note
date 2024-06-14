import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
const modules = import.meta.glob("../components/*.vue", {
  import: "default",
  eager: true,
});
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    for (const path in modules) {
      app.component(modules[path].__name, modules[path]);
    }
  },
} satisfies Theme;
