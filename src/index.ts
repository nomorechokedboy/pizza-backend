import express, { Request, Response, Handler } from 'express';
import morgan from 'morgan';
import cors, { CorsOptions } from 'cors';
import { PORT, MORGAN } from './config/env';
import { Server } from 'http';
import connectDb from './config/db';
import productRouter from './product/router';
import userRouter from './user/router';
import * as http from 'http';

const CORS_WHITELIST = [
  'http://localhost:5001/',
  'http://localhost:5000/',
  'https://pizza-api-nomorechokedboy.cloud.okteto.net',
];

const app = express();
const server: Server = http.createServer(app);

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
app.use('/api/v1/user', userRouter);
app.use('/', (_: Request, res: Response) => res.send('Hello cai dmm luon'));

server.on('error', (e) => {
  if (e) throw e;
});

server.listen(PORT || 5001, () => {
  console.log(`Stikinote api on http://localhost:${PORT}`);
});
