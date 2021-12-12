import { Request } from 'express';

export interface ProductBasic {
  name: string;
  description: string;
  img: string;
  price: number;
  type: string;
}

interface ReqDictionary {}
interface ResBody {}
export interface UserReqBody {
  email: string;
  password: string;
  phoneNumber: string;
  fullName: string;
}
interface ReqQuery {}

export type UserRequest = Request<
  ReqDictionary,
  ResBody,
  UserReqBody,
  ReqQuery
>;
