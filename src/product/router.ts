import express from 'express';
import * as controller from './controller';
const productRouter = express.Router();

productRouter.get('/', controller.getAll);

export default productRouter;
