import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { SECRET_KEY } from '../config/env';

interface UserPayload extends JwtPayload {
  email: string;
  role: string;
}

interface AdminRequest extends Request {
  user: any;
}

export default function isAdmin(
  req: AdminRequest,
  res: Response,
  next: NextFunction,
) {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    const decoded = jwt.verify(token!, SECRET_KEY!) as UserPayload;
    req.user = decoded;

    if (decoded.role === 'admin') next();
    throw Error('Authorized failed!');
  } catch (e) {
    console.error(e);
    return res.status(401).json({ error: 'Authorized failed!' });
  }
}
