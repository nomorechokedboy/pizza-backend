import express from 'express';
import * as controller from './controller';
const userRouter = express.Router();

userRouter.post('/register', controller.register);
userRouter.post('/login', controller.login);
userRouter.get('/:id', controller.getUser);

export default userRouter;
