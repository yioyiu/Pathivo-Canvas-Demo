<div align="center">
  <img src="./public/logo-full.svg" alt="Pathivo" width="240" />
  <br/><br/>

  # Pathivo Canvas Demo

  <p align="center">
    <strong>Think in structure. Execute with clarity.</strong>
    <br />
    可视化结构化任务管理 — 以节点画布为核心，将复杂事情从模糊想法拆解为可执行图谱。
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind" />
    <img src="https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer&logoColor=white" alt="Framer Motion" />
  </p>
</div>

---

## ✨ 特性

| | |
|---|---|
| 🎨 **暗色玻璃美学** | 深色主题 + 毛玻璃效果 + 渐变光晕，现代 SaaS 风格 |
| 🖱️ **鼠标 3D 视差** | Hero 区域背景层跟随鼠标产生立体空间感 |
| 🔄 **平滑滚动** | lenis 驱动的丝滑滚动体验 |
| 🧲 **磁性按钮** | 按钮在 hover 时跟随光标偏移，交互更细腻 |
| 📝 **文字逐行渐显** | 标题文字以逐行动画展现，Cinematic 效果 |
| 🃏 **3D 悬停卡片** | 功能卡片在 hover 时产生 3D 倾斜效果 |
| ✨ **微光扫过** | 卡片 hover 时 shimmer 光效扫过表面 |
| 🎯 **数字滚动** | 统计数据从 0 滚动到目标值 |
| 📊 **视图预览** | 自由画布 / 时间线 / 洞察 三种视图的动画 Mockup |
| 🌫️ **颗粒噪点** | 全局叠加细微纹理提升质感 |

## 🚀 快速开始

```bash
git clone https://github.com/yioyiu/Pathivo-Canvas-Demo.git
cd Pathivo-Canvas-Demo
npm install
npm run dev
```

浏览器打开 `http://localhost:5174` 即可查看。

## 📦 构建

```bash
npm run build    # 输出到 dist/
npm run preview  # 预览构建版本
```

## 🏗️ 项目结构

```
src/
├── components/
│   ├── mockups/       # 产品预览动画组件
│   │   ├── CanvasMockup.tsx    # 自由画布预览
│   │   ├── TimelineMockup.tsx  # 时间线预览
│   │   ├── InsightsMockup.tsx  # 洞察预览
│   │   └── AppPreview.tsx      # Hero 界面浮窗
│   ├── ui/            # 通用 UI 组件
│   │   ├── Button.tsx          # 按钮（含磁性效果）
│   │   ├── TiltCard.tsx        # 3D 倾斜卡片
│   │   ├── RevealText.tsx      # 文字逐行渐显
│   │   ├── GlassCard.tsx       # 毛玻璃卡片
│   │   └── NoiseOverlay.tsx    # 颗粒噪点纹理
│   ├── Hero.tsx        # 首屏
│   ├── Features.tsx    # 功能展示
│   ├── Views.tsx       # 多视图切换
│   ├── Nav.tsx         # 导航栏
│   └── ...
├── hooks/
│   ├── useMousePosition.ts  # 鼠标位置（MotionValue）
│   └── useScrollReveal.ts   # 滚动入场动画
├── data/
│   └── content.ts     # 所有文案数据
└── styles/
    └── globals.css    # Tailwind + 全局样式
```

## 🛠️ 技术栈

| 技术 | 用途 |
|------|------|
| [React 18](https://react.dev/) | UI 框架 |
| [TypeScript](https://www.typescriptlang.org/) | 类型安全 |
| [Vite 6](https://vitejs.dev/) | 构建工具 |
| [Tailwind CSS 3](https://tailwindcss.com/) | 样式 |
| [Framer Motion 11](https://www.framer.com/motion/) | 动画引擎 |
| [lenis](https://lenis.studiofreight.com/) | 平滑滚动 |

## 📄 License

MIT © 2025 Pathivo
