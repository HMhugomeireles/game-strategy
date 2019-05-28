import { Schema } from "mongoose";

export default interface User {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  lastLogin: Date;
  comparePassword(passPlaneText: string, hash: string): Promise<boolean>;
};
