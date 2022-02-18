import { Request } from 'express';

export interface ProductBasic {
  name: string;
  description: string;
  img: string;
  price: number;
  type: string;
}

export interface UserReqBody {
  email: string;
  password: string;
  phoneNumber: string;
  fullName: string;
}

export interface LoginRequestBody {
  email: string;
  password: string;
}

export interface UserPayload {
  id?: string;
  role: string;
}

export interface UserRequest extends Request {
  decoded?: UserPayload;
}
