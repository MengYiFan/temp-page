const express = require('express');
const path = require('path');
const app = express();

// 服务静态文件
app.use(express.static(path.join(__dirname, 'dist')));

// 处理所有路由，返回index.html（用于SPA）
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🎮 五子棋游戏服务器启动成功！`);
  console.log(`📱 本地访问: http://localhost:${PORT}`);
  console.log(`🌐 网络访问: http://你的IP地址:${PORT}`);
  console.log(`\n🎯 游戏特色：`);
  console.log(`   • 四种难度级别：简单、中等、困难、专家`);
  console.log(`   • 智能AI对手，挑战性递增`);
  console.log(`   • 精美的渐变UI设计`);
  console.log(`   • 完整的胜率统计系统`);
});