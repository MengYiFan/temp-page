# 五子棋游戏部署指南

## 🎯 部署到Vercel（推荐）

### 步骤1：安装Vercel CLI
```bash
npm i -g vercel
```

### 步骤2：登录Vercel
```bash
vercel login
```

### 步骤3：部署项目
```bash
# 在项目根目录执行
vercel --prod
```

### 步骤4：按提示配置
1. 选择项目名称（建议使用：gomoku-game）
2. 选择部署目录：当前目录
3. 构建命令：`npm run build`
4. 输出目录：`dist`

## 🚀 部署到Netlify

### 步骤1：准备构建文件
```bash
npm run build
```

### 步骤2：访问Netlify
1. 访问 https://app.netlify.com
2. 拖拽 `dist` 文件夹到网页上
3. 自动部署完成

## 🌐 部署到GitHub Pages

### 步骤1：创建GitHub仓库
1. 在GitHub创建新仓库
2. 上传项目代码

### 步骤2：启用GitHub Pages
1. 进入仓库设置
2. 找到Pages选项
3. 选择main分支和/docs文件夹

### 步骤3：构建并推送
```bash
npm run build
# 将dist文件夹内容复制到docs文件夹
cp -r dist/* docs/
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

## 📋 项目信息

### 项目特色
- ✅ 四种难度级别：简单、中等、困难、专家
- ✅ 智能AI对手，挑战性递增
- ✅ 精美的渐变UI设计
- ✅ 完整的胜率统计系统
- ✅ 响应式布局，支持移动端

### 技术栈
- **前端框架**：React + TypeScript
- **样式**：Tailwind CSS
- **状态管理**：Zustand
- **构建工具**：Vite
- **部署平台**：Vercel（推荐）

### 文件结构
```
五子棋网页/
├── src/                    # 源代码
│   ├── components/         # React组件
│   ├── stores/            # 状态管理
│   └── utils/             # 工具函数
├── dist/                  # 构建输出
├── vercel.json            # Vercel配置
└── package.json           # 项目配置
```

## 🎮 游戏玩法

1. **选择难度**：点击对应难度按钮
2. **选择棋子**：黑子或白子
3. **选择先后手**：先手或后手
4. **开始游戏**：点击棋盘落子
5. **AI会自动响应**：观察AI思考过程

## 🔧 常见问题

### Q: 部署失败怎么办？
A: 检查以下几点：
- 确保项目能正常构建：`npm run build`
- 检查网络连接
- 确认账号已登录

### Q: 游戏打不开？
A: 尝试：
- 清除浏览器缓存
- 使用无痕模式
- 检查防火墙设置

### Q: 如何自定义域名？
A: 在Vercel项目设置中添加自定义域名

## 📞 技术支持

如果部署过程中遇到问题，可以：
1. 检查控制台错误信息
2. 查看构建日志
3. 重新部署项目

祝你部署成功，享受五子棋游戏的乐趣！🎉