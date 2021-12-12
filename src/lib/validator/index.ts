import Validator from 'validatorjs';
import mongoose from 'mongoose';

export default Validator.register(
  'ObjectId',
  (value: any, requiment, attribute) => mongoose.Types.ObjectId.isValid(value),
  'The :attribute is not ObjectId',
);
