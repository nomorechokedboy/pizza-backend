import express, { Request, Response, Handler } from 'express';
import morgan from 'morgan';
import cors, { CorsOptions } from 'cors';
import { PORT, MORGAN } from './config/env';
import { Server } from 'http';
import connectDb from './config/db';
import { productRouter } from './product/router';

const CORS_WHITELIST = ['http://localhost:5001/', 'http://localhost:5000/'];

const app = express();
const http: Server = require('http').createServer(app);

connectDb();

app.use(cors(CORS_WHITELIST as CorsOptions));
app.use(express.json({}));
app.use(
  express.urlencoded({
    extended: true,
  }),
);

morgan.format(
  'myformat',
  '[:date[clf]] ":method :url" :status :res[content-length] - :response-time ms',
);

if (MORGAN === '1') {
  app.use('/api/*', morgan('myformat') as Handler);
}

app.use('/api/v1/product', productRouter);
app.use('/', (_: Request, res: Response) => res.send('Hello cai dmm luon'));

http.on('error', (e) => {
  if (e) throw e;
});

http.listen(PORT || 5001, () => {
  console.log(`Stikinote api on http://localhost:${PORT}`);
});
