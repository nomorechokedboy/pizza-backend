import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import Validator from '../lib/validator';
import User from './model';
import { LoginRequestBody, UserReqBody } from '../Types';
import { SERVER_ERROR, WRONG_USER, LOGIN_RULES as rules } from '../constants';
import genToken from '../lib/jwt';
import { log } from 'console';

export const register = async (req: Request, res: Response) => {
  const { email, password, phoneNumber, fullName } = req.body as UserReqBody;
  const data = { email, password, fullName, phoneNumber };

  const registerRules = {
    ...rules,
    fullName: 'required|min:5|max:25',
    phoneNumber: 'required|min:10|max:11',
  };

  const validation = new Validator(data, registerRules);
  if (validation.fails()) return res.status(400).json(validation.errors.all());

  try {
    const find = await User.findOne({ email });
    if (find)
      return res.status(401).json({
        errors: [{ email: ['The email has already existed!'] }],
      });

    const user = new User({
      ...data,
      role: 'user',
    });
    const saveUser = await user.save();

    return res
      .status(201)
      .json({ message: `Register success for email: ${saveUser.email}` });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: SERVER_ERROR + new Date().toString() });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body as LoginRequestBody;

  const validation = new Validator({ email, password }, rules);
  if (validation.fails()) return res.status(400).json(validation.errors.all());

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: WRONG_USER });

    const match = await bcrypt.compare(password, user?.password!);
    if (!match) return res.status(404).json({ error: WRONG_USER });

    const { _id, role } = user!;

    return res.json({
      token: genToken({ _id, role }),
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: SERVER_ERROR + new Date().toString() });
  }
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;

  try {
    const userInfo = await User.findById(id).select('fullName');
    if (!userInfo) {
      return res.status(404).json({ error: 'Invalid user!' });
    }

    return res.json({ info: userInfo });
  } catch (e) {
    res.status(500).json({ error: SERVER_ERROR + new Date().toString() });
    next(e);
  }
};
