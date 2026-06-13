// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages · 用户主页站仓库 tomtim0789.github.io
  // 站点根地址，用于生成绝对链接 / 站点地图等
  site: 'https://tomtim0789.github.io',

  // base 是站点的「子路径」。本仓库名是 <用户名>.github.io（用户主页站），
  // 网站直接挂在根目录 https://tomtim0789.github.io/ ，所以 base 保持 '/'。
  //
  // ⚠️ 只有「项目站」（仓库名不是 *.github.io，比如叫 blog）才需要把 base
  //    改成 '/仓库名'，那种地址是 https://tomtim0789.github.io/blog/ 。
  base: '/',
  markdown: {
    shikiConfig: {
      // 代码高亮：浅色 / 深色双主题，跟随系统自动切换
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
});
