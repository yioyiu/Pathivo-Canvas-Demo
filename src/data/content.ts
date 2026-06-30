export const siteConfig = {
  name: 'Pathivo',
  tagline: 'Think in structure. Execute with clarity.',
  description: '可视化结构化任务管理软件 — 以节点画布为核心，将复杂事情从模糊想法拆解为可执行图谱。',
  url: 'https://pathivo.cn',
  ogImage: 'https://pathivo.cn/og-image.png',
  links: {
    app: 'https://pathivo.cn/app',
    github: 'https://github.com/pathivo',
  },
  since: 2025,
  icp: {
    beian: '京ICP备2024XXXXXXXX号-1',
    mps: '京公网安备 XXXXXXXXXX号',
  },
};

export const navLinks = [
  { label: '特性', href: '#features' },
  { label: '视图', href: '#views' },
  { label: 'Obsidian', href: '#obsidian' },
  { label: '下载', href: '#cta' },
];

export const heroContent = {
  badge: '可视化结构化任务管理',
  title: '把模糊想法\n变成清晰蓝图',
  subtitle: 'Pathivo 以节点画布为核心，让你从模糊想法出发，逐步构建出可执行的清晰图谱 — 比思维导图更结构化，比传统项目管理更自由。',
  primaryCta: { label: '开始使用', href: 'https://pathivo.cn/app' },
  secondaryCta: { label: '了解特性', href: '#features' },
};

export const problemSolution = {
  problem: {
    title: '你的想法很好，但缺一张可执行的蓝图',
    description: '思维导图太自由，项目管理太死板。你需要的，是一个能在「构思」和「执行」之间自由切换的空间。',
    painPoints: [
      '任务清单看不到依赖关系',
      '思维导图没法追踪进度',
      '项目管理工具太重太难',
      '想在 Obsidian 里管项目，插件拼凑体验割裂',
    ],
  },
  solution: {
    title: 'Pathivo = 自由的画布 + 结构化的执行',
    description: '节点画布将两者合二为一 — 从一根根想法节点出发，生长为一张可执行的图谱。',
    benefits: [
      { title: '构思到执行无缝衔接', description: '从模糊想法到结构化计划，在同一张画布上完成' },
      { title: '进度自动追踪', description: '节点完成状态自动计算整体进度，一切一目了然' },
      { title: '关系清晰可见', description: '依赖、并行、关联 — 每种关系都有独立语义和视觉' },
    ],
  },
};

export const features = [
  {
    title: '节点画布',
    description: '无限延展的自由画布，节点位置永久保存。支持拖拽、缩放、框选，像在纸上画图一样自然。',
  },
  {
    title: '6 种节点类型',
    description: '任务、阶段、问题、想法、资源、风险 — 每种类型独立颜色与形状，一眼识别节点语义。',
  },
  {
    title: '语义化连线',
    description: '依赖关系、父子关系、关联关系、并行关系 — 连线本身携带语义，不只是视觉装饰。',
  },
  {
    title: '进度引擎',
    description: '基于节点完成状态自动计算进度，加权递归算法，子任务完成度实时反映到顶层。',
  },
  {
    title: '多视图切换',
    description: '自由画布、时间线、洞察 — 同一份数据多种视角，适应不同思考阶段。',
  },
  {
    title: '全局搜索',
    description: 'Ctrl+K 唤起全局搜索，跨项目跨节点快速定位。搜索即导航，直达目标节点。',
  },
];

export const views = [
  {
    id: 'canvas',
    label: '自由画布',
    title: '自由画布视图',
    description: '无限延展的自由画布，节点随意拖拽排列。适合头脑风暴、任务拆解、架构设计等开放性场景。',
    features: ['节点自由布局，位置永久保存', '支持缩放 10%~300%', '框选多节点批量操作', '迷你地图快速导航'],
    gradient: 'from-blue-400 to-indigo-500',
  },
  {
    id: 'timeline',
    label: '时间线',
    title: '时间线视图',
    description: '横向时间轴展示所有节点。绑定时间的节点以甘特条形式呈现，自动计算关键路径，适合排期规划。',
    features: ['甘特图拖拽调整日期', '自动关键路径计算', '逾期自动高亮预警', '依赖关系联动影响'],
    gradient: 'from-emerald-400 to-teal-500',
  },
  {
    id: 'insights',
    label: '洞察',
    title: '智能洞察',
    description: 'AI 自动分析项目数据，识别风险、发现瓶颈、提供优化建议，让项目管理更智慧。',
    features: ['自动识别关键路径', '风险预警与建议', '进度异常检测', '资源分配优化建议'],
    gradient: 'from-purple-400 to-pink-500',
  },
];

export const obsidianContent = {
  title: 'Obsidian 的最佳拍档',
  subtitle: 'Obsidian 管知识，Pathivo 管执行。一份 Markdown，两个世界。',
  steps: [
    {
      title: '在 Obsidian 中思考',
      description: '日常笔记、文献整理、头脑风暴 — Obsidian 是你最熟悉的知识管理工具。',
    },
    {
      title: '导出 Markdown',
      description: '将结构化的笔记导出为 .md 文件，Pathivo 原生支持 Markdown 导入。',
    },
    {
      title: '拖入 Pathivo',
      description: 'Markdown 文件拖入 Pathivo，自动解析为节点画布 — 层级、列表、任务清晰呈现。',
    },
    {
      title: '在 Pathivo 中执行',
      description: '在画布上调整结构、分配状态、跟踪进度。完事了再导出 MD 回 Obsidian 归档。',
    },
  ],
  benefits: [
    '节点位置不会乱跑',
    '连线分依赖/父子/关联三种语义',
    '交互式甘特图拖拽改日期',
    '自动洞察和建议',
  ],
};

export const stats = [
  { label: '节点类型', value: 6, suffix: '' },
  { label: '视图模式', value: 4, suffix: '' },
  { label: '关系类型', value: 5, suffix: '' },
  { label: '连接语意', value: 100, suffix: '%' },
];

export const ctaContent = {
  title: '准备好结构化你的想法了吗？',
  subtitle: '免费使用，无需注册。从浏览器打开 pathivo.cn/app 开始使用，或下载桌面客户端获得最佳体验。',
  primaryCta: { label: '在线使用 →', href: 'https://pathivo.cn/app' },
  secondaryCta: { label: '下载桌面版', href: '#download' },
  note: '支持 Windows / macOS · 数据存储在本地 · 无需联网',
};

export const footerLinks = [
  {
    title: '产品',
    links: [
      { label: '特性', href: '#features' },
      { label: '视图', href: '#views' },
      { label: '路线图', href: 'https://pathivo.cn/roadmap' },
      { label: '更新日志', href: 'https://pathivo.cn/changelog' },
    ],
  },
  {
    title: '生态',
    links: [
      { label: 'Obsidian 联动', href: '#obsidian' },
      { label: 'Markdown 导入', href: 'https://pathivo.cn/docs/import' },
      { label: 'API 文档', href: 'https://pathivo.cn/docs/api' },
    ],
  },
  {
    title: '关于',
    links: [
      { label: '关于 Pathivo', href: 'https://pathivo.cn/about' },
      { label: '隐私政策', href: 'https://pathivo.cn/privacy' },
      { label: '服务条款', href: 'https://pathivo.cn/terms' },
    ],
  },
];
