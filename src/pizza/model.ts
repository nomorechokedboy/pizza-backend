import mongoose from 'mongoose';
import { ProductBasic } from '../Types';

const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<ProductBasic>('product', schema);
