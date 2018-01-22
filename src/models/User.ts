import * as mongoose from "mongoose";
import {IUser} from "./interfaces/IUser";
import {Model, model} from "mongoose";

export interface IUserModel extends mongoose.Document, IUser {

}
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String
});
export const User: Model<IUserModel> = model<IUserModel>("User", userSchema);
