import mongoose from 'mongoose';
import { ProductBasic } from '../Types';

const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model<ProductBasic>('product', schema);
