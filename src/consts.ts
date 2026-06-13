// 站点全局配置 —— 大部分个性化内容都从这里改起

export const SITE = {
  /** 显示在导航栏左上角，以及浏览器标题里的站点名 */
  title: '你的名字',
  /** 用于页脚版权、关于页等 */
  author: '你的名字',
  /** 默认页面描述（SEO） */
  description: '一个极简的个人博客 —— 记录技术、设计与生活的思考。',
  email: 'you@example.com',
};

export interface NavLink {
  href: string;
  label: string;
}

/** 顶部导航菜单 */
export const NAV_LINKS: NavLink[] = [
  { href: '/', label: '主页' },
  { href: '/blog', label: '博客' },
  { href: '/projects', label: '作品集' },
  { href: '/about', label: '关于我' },
];

export interface Social {
  href: string;
  label: string;
}

/** 社交链接 —— 显示在「关于我」页面 */
export const SOCIAL: Social[] = [
  { href: 'https://github.com/yourname', label: 'GitHub' },
  { href: 'mailto:you@example.com', label: '邮箱' },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  /** 可选；没有链接的项目去掉这一行即可 */
  link?: string;
  year: number;
}

/** 作品集 —— 在这里增删你的项目 */
export const PROJECTS: Project[] = [
  {
    title: '示例项目 · Alpha',
    description: '一句话描述这个项目的目标、你承担的角色，以及用到的技术栈。',
    tags: ['Astro', 'TypeScript'],
    link: 'https://github.com/yourname/alpha',
    year: 2026,
  },
  {
    title: '示例项目 · Beta',
    description: '可以写它解决了什么问题，或者其中你觉得最有意思的技术细节。',
    tags: ['React', 'Node.js'],
    link: 'https://github.com/yourname/beta',
    year: 2025,
  },
  {
    title: '示例项目 · Gamma',
    description: '没有外链的项目也能展示 —— 删掉 link 字段就不会出现「查看项目」按钮。',
    tags: ['设计', 'Figma'],
    year: 2024,
  },
];
