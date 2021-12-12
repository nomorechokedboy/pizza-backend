import { Request, Response } from 'express';
import Validator from 'validatorjs';
import User from './model';
import { UserReqBody } from '../Types';

export const register = async (req: Request, res: Response) => {
  const { email, password, phoneNumber, fullName } = req.body as UserReqBody;
  const data = { email, password, fullName, phoneNumber };

  const rules = {
    email: 'required|email',
    password: ['required', 'regex:/^(?=.*[a-z])(?=.*\\d)([^\\s]){8,}$/i'],
    fullName: 'required|min:5|max:25',
    phoneNumber: 'required|min:10|max:11|',
  };

  const validation = new Validator(data, rules);
  if (validation.fails()) {
    return res.status(400).json(validation.errors.all());
  }

  try {
    const find = await User.findOne({ email });
    if (find)
      return res.status(401).json({
        errors: [{ email: ['The email has already existed!'] }],
      });

    const user = new User(data);
    const saveUser = await user.save();

    return res
      .status(201)
      .json({ message: `Register success for email: ${user.email}` });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Server Error #' + new Date().toString() });
  }
};
