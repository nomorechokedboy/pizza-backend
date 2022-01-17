import Validator from 'validatorjs';
import mongoose from 'mongoose';

Validator.register(
  'ObjectId',
  (value: any) => mongoose.Types.ObjectId.isValid(value),
  'The :attribute is not ObjectId',
);

export default Validator;
