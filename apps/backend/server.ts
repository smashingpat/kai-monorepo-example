import { DTO } from 'shared';
import http from 'http';
import express from 'express';
import cors from './lib/middleware/cors';

const PORT = 3000;

const app = express();

app.use(cors());
app.get('/message', (req, res) => {
  const data: DTO = {
    message: 'Hello, World!',
    date: Math.floor(Date.now() / 1000),
  };
  res.json(data);
});

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}.`);
});
