import { DTO } from 'shared';
import http from 'node:http';

const PORT = 3000;

const server = http.createServer((req, res) => {
  const data: DTO = {
    message: 'Hello, World!',
    date: Math.floor(Date.now() / 1000),
  };
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(JSON.stringify(data));
});
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}.`);
});
