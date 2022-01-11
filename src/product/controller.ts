import { Request, Response } from 'express';
import { SERVER_ERROR } from '../constants/messages';
import Product from './model';

export const get_all = (_: Request, res: Response) => {
  Product.find({})
    .then((products) => res.json(products))
    .catch((e) => {
      console.error(e);
      res.status(500).json({ error: SERVER_ERROR + new Date().toString() });
    });
};
