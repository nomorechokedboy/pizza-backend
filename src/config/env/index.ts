import dotenv from 'dotenv';

dotenv.config();
export const { PORT, MORGAN, MONGODB, SECRET_KEY, refreshTokenKey } =
  process.env;
