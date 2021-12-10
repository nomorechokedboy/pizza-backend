import mongoose from 'mongoose';
import { MONGODB } from '../env';

export default function connectDb() {
  mongoose
    .connect(MONGODB!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions)
    .then(async (_: typeof mongoose) => {
      console.log('Connect Mongodb Success!');
    })
    .catch((e: any) => console.error(e));
}
