import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../../config/env';
import { UserPayload } from '../../Types';

export default function genToken(payload: UserPayload) {
  return jwt.sign(payload, SECRET_KEY!);
}
