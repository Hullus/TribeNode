import { Types } from 'mongoose';

export type Habit = {
  wakeUp: boolean;
  physicalActivity: boolean;
  reading: boolean;
  meditation: boolean;
  socialMedia: boolean;
  noSugar: boolean;
  creativeActivity: boolean;
  specialHabit1: {
    name: string;
    completed: boolean;
  };
  specialHabit2: {
    name: string;
    completed: boolean;
  };
  experimentalHabit1: {
    name: string;
    completed: boolean;
  };
};

export type HabitKeyValue = {
  [key: string]: Habit;
};

export interface IUser {
  _id: Types.ObjectId;
  firstName: string;
  lastName: string;
  habits: HabitKeyValue[];
  email: string;
  tribe: string;
}
