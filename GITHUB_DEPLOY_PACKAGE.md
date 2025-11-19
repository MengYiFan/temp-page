# 🎮 五子棋游戏 - GitHub部署包

## 📦 项目概述

这是一个完整的网页版五子棋闯关游戏项目，已经配置好所有必要的文件，可以直接部署到GitHub并上线运行。

## 🚀 快速部署步骤

### 1. 创建GitHub仓库
1. 登录GitHub账号
2. 点击右上角的 "+" → "New repository"
3. 仓库名称建议使用：`gomoku-game` 或 `五子棋游戏`
4. 设置为公开仓库（Public）
5. 不要初始化README（我们会上传完整的项目）

### 2. 上传项目文件
1. 下载/复制本项目所有文件
2. 使用Git命令或GitHub Desktop上传：
```bash
git init
git add .
git commit -m "Initial commit - Gomoku Game"
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

### 3. 选择部署平台

#### 🎯 方案一：Netlify（推荐，最简单）
1. 访问 [Netlify](https://app.netlify.com)
2. 点击 "Add new site" → "Deploy manually"
3. 拖拽项目中的 `dist` 文件夹到网页上
4. 自动获得免费域名，如：`https://amazing-gomoku-123456.netlify.app`

#### 🚀 方案二：Vercel（性能优秀）
1. 访问 [Vercel](https://vercel.com)
2. 使用GitHub账号登录
3. 点击 "New Project"
4. 选择你的GitHub仓库
5. 点击 "Deploy"，自动完成部署

#### 🌐 方案三：GitHub Pages（完全免费）
1. 在GitHub仓库中，点击 Settings → Pages
2. Source选择 "Deploy from a branch"
3. 选择 "main" 分支和 "/docs" 文件夹
4. 首先需要运行 `npm run build` 并将dist内容复制到docs文件夹
5. 保存后获得地址：`https://你的用户名.github.io/仓库名/`

## 📁 项目文件说明

### 核心文件
- `src/` - 源代码目录（React组件、AI算法、状态管理）
- `dist/` - 构建后的生产文件（直接用于部署）
- `package.json` - 项目配置和依赖
- `README.md` - 项目文档（包含使用说明）

### 部署配置
- `vercel.json` - Vercel部署配置
- `.github/workflows/deploy.yml` - GitHub Actions自动部署
- `simple-server.js` - 本地测试服务器
- `deploy.html` - 部署辅助页面

### 开发工具
- `vite.config.ts` - Vite构建配置
- `tailwind.config.js` - Tailwind CSS配置
- `tsconfig.json` - TypeScript配置

## 🎮 游戏特色

✅ **四种难度**：简单、中等、困难、专家
✅ **智能AI**：从随机算法到高级策略
✅ **精美UI**：渐变背景，玻璃态效果
✅ **响应式**：完美适配手机和电脑
✅ **统计系统**：胜率追踪，游戏记录
✅ **流畅交互**：悬停预览，动画反馈

## 🔧 本地开发

如果需要本地开发或修改：
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建项目
npm run build

# 本地测试
npm run serve
```

## 📱 移动端支持

游戏完全支持移动设备：
- 触摸友好的棋盘界面
- 自适应布局设计
- 优化的按钮大小
- 流畅的动画效果

## 🎯 部署成功验证

部署完成后，你应该能看到：
1. 美观的游戏主界面
2. 四种难度选择按钮
3. 15×15的标准五子棋棋盘
4. 完整的游戏统计信息

## 🆘 常见问题

**Q: 部署后页面空白？**
A: 检查是否上传了 `dist` 文件夹，并确认构建成功

**Q: 游戏无法运行？**
A: 查看浏览器控制台错误信息，通常是资源路径问题

**Q: 如何自定义域名？**
A: 在Netlify/Vercel的项目设置中添加自定义域名

**Q: 想修改游戏内容？**
A: 修改 `src/` 中的源代码，然后重新构建 `npm run build`

## 🌟 项目亮点

- **现代化技术栈**：React 18 + TypeScript + Vite
- **专业AI算法**：四种难度策略，挑战性递增
- **精美视觉设计**：渐变背景，玻璃态效果
- **完整项目结构**：包含所有部署配置和文档
- **多平台支持**：一键部署到Netlify、Vercel、GitHub Pages

## 📞 技术支持

如果部署过程中遇到问题：
1. 查看项目中的 `DEPLOYMENT_GUIDE.md` 详细指南
2. 检查浏览器控制台错误信息
3. 确认所有文件都已正确上传
4. 重新构建项目：`npm run build`

---

🎉 **祝你部署成功，享受五子棋游戏的乐趣！** 

⭐ 如果项目对你有帮助，记得在GitHub上给个Star！