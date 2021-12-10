import dotenv from 'dotenv';

dotenv.config();
export const { PORT, MORGAN, MONGODB } = process.env;
