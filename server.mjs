import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hello World112!');
  res.end();
}).listen(process.env.PORT);
