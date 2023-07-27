import { model, Schema, Types } from 'mongoose';
import { IUser, HabitKeyValue } from './user.interface';

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  habits: { type: new Types.Array<HabitKeyValue>() },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  tribe: { type: String, required: true },
});

const UserModel = model<IUser>('User', userSchema);

// eslint-disable-next-line import/prefer-default-export
export { UserModel };
