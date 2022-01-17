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

export type UserRequest = Request<unknown, unknown, UserReqBody, unknown>;

export interface UserPayload {
  _id: string;
  role: string;
}

export interface LoginRequestBody {
  email: string;
  password: string;
}
