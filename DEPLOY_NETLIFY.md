# Netlify 拖拽部署助手

## 🚀 一键部署步骤

### 方法1：Netlify Drop（最简单）
1. 访问：https://app.netlify.com/drop
2. 将下面的 `dist` 文件夹拖拽到网页上
3. 等待自动部署完成
4. 获得免费域名，如：https://amazing-gomoku-123456.netlify.app

### 方法2：GitHub + Netlify（推荐）
1. 创建GitHub仓库
2. 上传项目代码
3. 连接Netlify到GitHub仓库
4. 自动构建和部署

### 方法3：Vercel（替代方案）
1. 访问：https://vercel.com
2. 导入GitHub仓库
3. 一键部署

## 📁 需要部署的文件

确保以下文件已准备就绪：
```
dist/
├── index.html
├── assets/
│   ├── index-DE2faK0s.css
│   ├── index-oiorY0qC.js
│   └── ai-C2FoHh2h.js
├── vercel.json
└── ...其他资源文件
```

## 🎯 部署前检查清单

- ✅ 项目可以正常构建
- ✅ 本地测试通过
- ✅ 所有功能正常
- ✅ 响应式设计正常

## 🌐 部署后验证

1. 访问提供的URL
2. 测试游戏功能
3. 检查移动端适配
4. 验证AI对手功能

## 📞 技术支持

如果部署遇到问题：
1. 检查构建日志
2. 确认文件完整性
3. 查看错误信息
4. 重新尝试部署

---

**🎮 五子棋游戏特色：**
- 四种难度级别
- 智能AI对手
- 精美UI设计
- 完整统计系统
- 响应式布局

祝你部署成功！🎉

要开始使用，请：
1. 确保项目已构建（运行 `npm run build`）
2. 选择上述任一部署方式
3. 按照步骤完成部署