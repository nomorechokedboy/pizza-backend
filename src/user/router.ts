import express from 'express';
import * as controller from './controller';
import * as validate from '../middleware/validate/user';
const userRouter = express.Router();

userRouter.post('/register', validate.register, controller.register);
userRouter.post('/login', validate.login, controller.login);
userRouter.get('/:id', controller.getUser);

export default userRouter;
