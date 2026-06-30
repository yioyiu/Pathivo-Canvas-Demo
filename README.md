<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./public/logo-full.svg">
    <img src="./public/logo-full.svg" alt="Pathivo" width="320">
  </picture>
</p>

<h1 align="center">Pathivo</h1>
<p align="center"><strong>Think in structure. Execute with clarity.</strong></p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?logo=react" alt="React 18">
  <img src="https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss" alt="Tailwind">
  <img src="https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer" alt="Framer Motion">
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License">
</p>

<p align="center">
  <b>Pathivo</b> 是一款面向 PC 的<strong>可视化结构化任务管理软件</strong>，以节点画布（Node Canvas）为核心交互范式，替代传统线性任务清单与静态文档工具。让你从模糊想法出发，逐步构建出可执行的清晰图谱。
</p>

<p align="center">
  👉 <a href="https://pathivo.cn"><b>pathivo.cn</b></a> — 免费使用，无需注册
</p>

<br/>

> 📎 本仓库为 **Pathivo 官方网站** 源码，基于 Vite + React + Tailwind CSS + Framer Motion 构建。

---

## ✨ 核心特性

### 🎨 节点画布 — 自由思考的空间

无限画布 + 自由拖拽，支持 **6 种节点类型**：

| 类型 | 图标 | 用途 |
|------|------|------|
| **任务** | ✅ `check_circle` | 具体可执行事项 |
| **阶段** | 🚩 `flag` | 里程碑 / 项目阶段 |
| **问题** | 🐛 `bug_report` | 待解决缺陷或障碍 |
| **想法** | 💡 `lightbulb` | 灵感、待评估方案 |
| **资源** | 📄 `article` | 参考资料、文档链接 |
| **风险** | ⚠️ `warning` | 潜在风险与应对 |

### 🔗 关系连线 — 不止于层级

支持多种连接关系，让任务间的依赖一目了然：

- **依赖关系** — A 依赖 B，B 完成后 A 才能开始
- **父子关系** — 将大任务拆解为子任务层级
- **相关关系** — 弱关联，仅供参考

支持折线 / 曲线两种路径样式，拖拽重连轻松调整。

### 👁️ 多视图切换

同一份数据，多种视角：

| 视图 | 说明 |
|------|------|
| **画布** | 自由节点图谱，适合构思与拆解 |
| **鱼骨图** | 因果分析，追溯问题根源 |
| **时间线** | 按时间轴查看任务进展 |
| **大纲列表** | 树形结构化列表，快速浏览 |
| **洞察面板** | 进度统计、优先级分布、逾期预警 |

### 📊 进度引擎

自动计算项目整体完成度，按优先级 / 状态分类统计，逾期任务高亮提醒，阻塞依赖自动标记。

### 📥 导入 / 导出

支持 **Markdown 格式双向导入导出** — 用自己熟悉的编辑器批量化编辑任务，再导入到画布；也可以把画布导出为 Markdown 文档分享给团队。

### 🔍 搜索直达

全局搜索，快速定位任意节点与项目。

---

## 🚀 快速开始

直接访问 **[https://pathivo.cn](https://pathivo.cn)** 即可使用，无需安装。

如需本地运行本网站：

```bash
git clone https://github.com/yioyiu/Pathivo-Canvas-Demo.git
cd Pathivo-Canvas-Demo
npm install
npm run dev
```

浏览器打开 `http://localhost:5174` 即可查看。

---

## 🏗️ 技术栈

| 层 | 技术 | 说明 |
|-----|------|------|
| **前端框架** | React 18 + TypeScript | 组件化 UI |
| **状态管理** | Zustand | 轻量、高性能状态管理 |
| **画布引擎** | ReactFlow 11 | 节点编辑器核心 |
| **构建工具** | Vite 6 | 极速构建与 HMR |
| **样式** | Tailwind CSS 3 + Material Symbols | 原子化 CSS + 图标库 |
| **动画** | Framer Motion | 流畅过渡动效 |
| **图表** | Recharts | 洞察面板统计图表 |
| **后端** | Express 4 | RESTful API |
| **数据库** | SQLite (better-sqlite3, WAL 模式) | 本地存储，高性能 |
| **认证** | JWT + 阿里云号码认证 | 安全登录 |
| **桌面打包** | Electron | 跨平台桌面应用 |

---

## 📁 项目结构

```
Pathivo/
├── src/                    # 前端源码
│   ├── components/
│   │   ├── Canvas/         # 节点画布（核心模块）
│   │   ├── Layout/         # 布局组件（侧栏、顶栏、用户菜单）
│   │   ├── Workspace/      # 工作台首页
│   │   ├── Timeline/       # 时间线视图
│   │   ├── Insights/       # 洞察统计分析
│   │   └── common/         # 通用组件（对话框、登录、头像等）
│   ├── store/              # Zustand 状态管理
│   ├── services/           # API 请求与同步
│   ├── utils/              # 工具函数
│   │   └── db/             # 本地 IndexedDB 封装
│   ├── types/              # TypeScript 类型定义
│   └── styles/             # 全局样式
├── server/                 # 后端源码
├── electron/               # Electron 桌面打包
├── website/                # 官方网站源码 👈 本仓库
├── public/                 # 静态资源
└── deploy/                 # 部署配置
```

### website/ — 官方网站

```
website/
├── src/
│   ├── components/
│   │   ├── mockups/        # 产品预览动画组件
│   │   ├── ui/             # 通用 UI（Button、TiltCard、RevealText 等）
│   │   ├── Hero.tsx        # 首屏（鼠标 3D 视差 + 标题逐行渐显）
│   │   ├── Features.tsx    # 功能展示（3D 悬停卡片 + Shimmer）
│   │   ├── Views.tsx       # 多视图动画切换
│   │   └── ...
│   ├── hooks/              # useMousePosition、useScrollReveal
│   └── data/content.ts     # 所有文案数据
├── public/                 # 静态资源
└── dist/                   # 构建输出
```

---

## 📜 路线图

- [x] 节点画布（拖拽 / 多选 / 缩放）
- [x] 6 种节点类型
- [x] 关系连线（依赖 / 父子 / 相关）
- [x] 项目 CRUD
- [x] 时间线视图
- [x] 洞察统计面板
- [x] Markdown 导入导出
- [x] 用户认证（密码 + 短信验证码 + 一键登录）
- [x] 搜索过滤
- [x] 撤销 / 重做
- [x] Electron 桌面打包
- [ ] 鱼骨图视图完善
- [ ] 甘特图视图
- [ ] 团队协作 / 分享
- [ ] 数据云同步
- [ ] 第三方集成（飞书 / 钉钉 / Slack）

---

## 📄 License

MIT © 2025 Pathivo
