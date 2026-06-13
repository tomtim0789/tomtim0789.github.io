# 个人博客

一个用 [Astro](https://astro.build) 搭建的极简个人博客，包含主页、博客、作品集和关于页。默认零 JavaScript、加载迅速，并自动适配深色 / 浅色模式。

## 开发

```bash
npm install      # 安装依赖（首次）
npm run dev      # 启动本地开发服务器 http://localhost:4321
npm run build    # 构建到 dist/
npm run preview  # 本地预览构建产物
npm run check    # TypeScript / Astro 类型检查
```

> 本机的 Node 安装在 `E:\nodejs`；若 `npm` 不在 PATH，可用 `E:\nodejs\npm.cmd` 代替。

## 项目结构

```
src/
├─ consts.ts              # 站点配置：站名、导航、社交链接、作品集数据
├─ utils.ts               # 工具函数（如日期格式化）
├─ content.config.ts      # 博客集合的字段定义（Content Collections）
├─ styles/global.css      # 极简设计系统（颜色 / 字体 / 组件样式集中在此）
├─ layouts/
│  └─ BaseLayout.astro    # 全站通用布局（导航 + 页脚）
├─ pages/
│  ├─ index.astro         # 主页（自我介绍 + 最新文章）
│  ├─ about.astro         # 关于我
│  ├─ projects.astro      # 作品集
│  └─ blog/
│     ├─ index.astro      # 文章列表（按年份归档）
│     └─ [...slug].astro  # 单篇文章页
└─ content/blog/*.md      # 你的文章
```

## 常见修改

- **改站点信息 / 导航 / 作品集**：编辑 `src/consts.ts`
- **改视觉风格（颜色、字号、间距）**：编辑 `src/styles/global.css` 顶部的 CSS 变量
- **写新文章**：在 `src/content/blog/` 新建 `.md` 文件，文件名即网址。开头的字段：

  ```markdown
  ---
  title: 文章标题          # 必填
  description: 一句话摘要   # 可选
  pubDate: 2026-06-13      # 必填
  tags: [标签一, 标签二]    # 可选
  draft: true              # 可选；为 true 时不会发布
  ---
  ```

## 部署

构建产物是纯静态文件（`dist/`），可托管到 Vercel、Netlify、Cloudflare Pages、GitHub Pages 等任意静态平台。上线前记得把 `astro.config.mjs` 里的 `site` 改成你的正式域名。
