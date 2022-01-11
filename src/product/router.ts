import express from 'express';
import * as controller from './controller';
const productRouter = express.Router();

productRouter.get('/', controller.get_all);

export default productRouter;
