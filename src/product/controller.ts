import { Request, Response } from 'express';
import { serverError } from '../constants/messages';
import Product from './model';

export const getAll = (req: Request, res: Response) => {
  Product.find({})
    .then((products) => res.json(products))
    .catch((e) => {
      console.error(e);
      res.status(500).json({ error: serverError + new Date().toString() });
    });
};
