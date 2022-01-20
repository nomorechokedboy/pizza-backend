import jwt from 'jsonwebtoken';
import { refreshTokenKey, SECRET_KEY } from '../../config/env';
import { UserPayload } from '../../Types';

export default function genToken(payload: UserPayload) {
  return jwt.sign(payload, SECRET_KEY!, { expiresIn: '10m' });
}

export const genRefreshToken = (payload: UserPayload) =>
  jwt.sign(payload, refreshTokenKey!, { expiresIn: '2h' });
