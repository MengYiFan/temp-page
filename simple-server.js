const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, 'dist', req.url === '/' ? 'index.html' : req.url);
  
  const extname = path.extname(filePath).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm'
  };

  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // 如果是SPA，返回index.html
        if (req.url !== '/' && !path.extname(req.url)) {
          fs.readFile(path.join(__dirname, 'dist', 'index.html'), (err, content) => {
            if (err) {
              res.writeHead(404);
              res.end('404 Not Found');
            } else {
              res.writeHead(200, { 'Content-Type': 'text/html' });
              res.end(content, 'utf-8');
            }
          });
        } else {
          res.writeHead(404);
          res.end('404 Not Found');
        }
      } else {
        res.writeHead(500);
        res.end('500 Internal Server Error: ' + error.code + ' ..\n');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

const PORT = process.env.PORT || 8090;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`🎮 五子棋游戏服务器启动成功！`);
  console.log(`📱 本地访问: http://localhost:${PORT}`);
  console.log(`🌐 网络访问: http://你的IP地址:${PORT}`);
  console.log(`\n🎯 游戏特色：`);
  console.log(`   • 四种难度级别：简单、中等、困难、专家`);
  console.log(`   • 智能AI对手，挑战性递增`);
  console.log(`   • 精美的渐变UI设计`);
  console.log(`   • 完整的胜率统计系统`);
  console.log(`\n🚀 如果打不开，请尝试：`);
  console.log(`   • 检查防火墙设置`);
  console.log(`   • 尝试不同的浏览器`);
  console.log(`   • 清除浏览器缓存`);
  console.log(`   • 使用无痕模式访问`);
});