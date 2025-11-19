# 🎮 五子棋闯关游戏

一个精美的网页版五子棋游戏，支持四种难度级别和智能AI对手。

## 🌟 项目特色

- **🎯 四种难度级别**：简单、中等、困难、专家
- **🧠 智能AI对手**：根据难度调整策略，从随机到高级算法
- **🎨 精美UI设计**：渐变背景，玻璃态效果，响应式布局
- **📊 完整统计系统**：胜率追踪、总局数、胜负记录
- **📱 移动端适配**：完美支持手机和平板设备
- **⚡ 流畅交互**：悬停预览、动画反馈、实时状态

## 🚀 在线体验

### 一键部署选项：

#### Netlify（推荐）
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/your-username/gomoku-game)

#### Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/gomoku-game)

#### GitHub Pages
访问项目GitHub Pages地址即可体验

## 📸 游戏截图

### 主界面
![游戏主界面](https://via.placeholder.com/800x400/667eea/ffffff?text=五子棋游戏主界面)

### 棋盘界面
![棋盘界面](https://via.placeholder.com/800x400/764ba2/ffffff?text=精美棋盘设计)

### 移动端适配
![移动端界面](https://via.placeholder.com/400x800/667eea/ffffff?text=移动端适配)

## 🛠️ 技术栈

- **前端框架**：React 18 + TypeScript
- **状态管理**：Zustand
- **样式方案**：Tailwind CSS
- **构建工具**：Vite
- **部署平台**：Netlify / Vercel / GitHub Pages

## 📦 项目结构

```
gomoku-game/
├── src/
│   ├── components/         # React组件
│   │   ├── Game.tsx       # 游戏主组件
│   │   ├── GameBoard.tsx  # 棋盘组件
│   │   ├── GameControls.tsx # 控制面板
│   │   └── GameStatus.tsx # 状态显示
│   ├── stores/            # 状态管理
│   │   └── gameStore.ts   # 游戏状态存储
│   ├── utils/             # 工具函数
│   │   └── ai.ts          # AI算法
│   ├── App.tsx            # 应用入口
│   └── main.tsx           # 程序入口
├── dist/                  # 构建输出（部署用）
├── public/                # 静态资源
├── .github/workflows/     # GitHub Actions
│   └── deploy.yml         # 自动部署配置
├── vercel.json            # Vercel配置
├── tailwind.config.js     # Tailwind配置
├── tsconfig.json          # TypeScript配置
├── vite.config.ts         # Vite配置
└── package.json           # 项目依赖
```

## 🎮 游戏功能

### 核心功能
- ✅ 15×15标准五子棋棋盘
- ✅ 智能AI对手系统
- ✅ 胜负自动判断
- ✅ 悔棋和重新开始
- ✅ 实时游戏状态显示

### AI算法
- **简单模式**：随机选择空位
- **中等模式**：基础评分算法
- **困难模式**：加入位置偏好策略
- **专家模式**：深度策略分析

### 用户体验
- ✅ 悬停预览效果
- ✅ 最后一步标记
- ✅ AI思考动画
- ✅ 胜负结果弹窗
- ✅ 胜率统计追踪

## 🚀 快速开始

### 本地开发

```bash
# 克隆项目
git clone https://github.com/your-username/gomoku-game.git
cd gomoku-game

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建项目
npm run build

# 预览构建结果
npm run preview
```

### 环境要求
- Node.js >= 16.0.0
- npm >= 7.0.0

## 📱 部署指南

### 一键部署

#### Netlify
1. 访问 [Netlify Drop](https://app.netlify.com/drop)
2. 拖拽 `dist` 文件夹到网页上
3. 自动获得免费域名

#### Vercel
1. 安装Vercel CLI：`npm i -g vercel`
2. 运行：`vercel --prod`
3. 按提示完成部署

#### GitHub Pages
1. Fork本项目到你的GitHub
2. 启用GitHub Pages功能
3. 选择main分支作为源

### 手动部署

1. **构建项目**
   ```bash
   npm run build
   ```

2. **选择部署平台**
   - Netlify: 上传 `dist` 文件夹
   - Vercel: 使用CLI或网页界面
   - GitHub Pages: 推送到gh-pages分支

3. **配置域名**（可选）
   - 在平台设置中添加自定义域名
   - 配置DNS解析

## 🎯 游戏规则

### 基本规则
- 黑子先行，双方轮流落子
- 先形成五子连珠的一方获胜
- 连线可以是横向、纵向或斜向
- 棋子一旦落下不可移动

### AI对战
- 选择难度级别
- 选择棋子颜色（黑子/白子）
- 选择先后手
- 点击棋盘落子
- AI会自动响应

## 🔧 开发指南

### 添加新功能
1. 在 `src/components/` 添加新组件
2. 在 `src/stores/` 更新状态管理
3. 在 `src/utils/` 添加工具函数
4. 更新相关文档

### 修改AI算法
- 编辑 `src/utils/ai.ts`
- 调整评分权重和策略
- 测试不同难度级别

### 样式定制
- 修改 `tailwind.config.js`
- 更新组件样式类名
- 确保响应式适配

## 🤝 贡献指南

欢迎提交Issue和Pull Request！

### 提交Issue
- 报告bug时提供复现步骤
- 建议新功能时说明使用场景
- 标注优先级和标签

### 提交代码
1. Fork项目
2. 创建特性分支：`git checkout -b feature/amazing-feature`
3. 提交更改：`git commit -m 'Add amazing feature'`
4. 推送分支：`git push origin feature/amazing-feature`
5. 创建Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- 感谢React和TypeScript社区
- 感谢Tailwind CSS提供优秀的样式方案
- 感谢所有贡献者和支持者

## 📞 联系方式

- 项目Issue：[GitHub Issues](https://github.com/your-username/gomoku-game/issues)
- 邮箱：your-email@example.com

---

⭐ 如果这个项目对你有帮助，请给个Star支持一下！ 🌟

Made with ❤️ by [Your Name]
