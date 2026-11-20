const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3030;
const HOST = '0.0.0.0';
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  let reqUrl = decodeURI(req.url.split('?')[0]);
  if (reqUrl === '/') reqUrl = '/index.html';

  let filePath = path.join(ROOT_DIR, reqUrl);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, {
          'Content-Type': 'text/html; charset=UTF-8',
          'Cache-Control': 'no-store'
        });
        res.end(`<h1>404 Not Found</h1><p>File ${reqUrl} không tồn tại trên máy chủ Trịnh Phú Gia.</p><a href="/">Quay về trang chủ</a>`);
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(content);
    }
  });
});

process.on('uncaughtException', (err) => {
  console.error('[SERVER ERROR]', err);
});

process.on('unhandledRejection', (reason) => {
  console.error('[SERVER REJECTION]', reason);
});

server.on('error', (err) => {
  console.error('[SERVER LISTEN ERROR]', err);
});

server.listen(PORT, HOST, () => {
  console.log(`[TRINH PHU GIA SERVER] Phục vụ thư mục: ${ROOT_DIR}`);
  console.log(`[TRINH PHU GIA SERVER] Đang lắng nghe tại: http://localhost:${PORT} và http://127.0.0.1:${PORT}`);
});
