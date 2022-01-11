import mongoose from 'mongoose';
import { MONGODB } from '../env';
import Product from '../../product/model';

export default function connectDb() {
  mongoose
    .connect(MONGODB!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions)
    .then(async (_: typeof mongoose) => {
      console.log('Connect Mongodb Success!');

      // seed product

      /* const products = await Product.create(require('./product.json'))
        .then(() => {
          console.log('seed success');
        })
        .catch((e) => console.error(e)); */
    })
    .catch((e: any) => console.error(e));
}
