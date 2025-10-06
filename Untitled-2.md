├── src/               # 源代码目录
│   ├── main.ts        # Vue应用主入口
│   ├── App.vue        # 根组件
│   ├── google/        # Chrome扩展相关代码
│   │   ├── background.js    # 扩展后台服务
│   │   ├── index.js         # 内容脚本
│   │   ├── ContextMenu.vue  # 文本选择菜单组件
│   │   └── ActionDropdown.vue # 下拉菜单组件
│   ├── common/        # 公共资源和工具
│   ├── layouts/       # 布局组件
│   ├── pages/         # 页面组件
│   ├── router/        # 路由配置
│   ├── pinia/         # 状态管理
│   └── plugins/       # 插件配置
├── dist/              # 构建输出目录
├── manifest.json      # Chrome扩展配置文件
├── vite.config.js     # 主应用构建配置
└── vite.google.config.js # Chrome扩展构建配置