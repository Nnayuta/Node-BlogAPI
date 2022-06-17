import mongoose from "mongoose";
import { UserModel } from "../models/UserModel";

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const userSchema = new Schema<UserModel>(
    {
        displayName: {
            type: String,
        },
        username: {
            required: [true, "Username is required"],
            type: String,
            unique: true,
        },
        password: {
            required: [true, "Password is required"],
            type: String,
        },
        avatar: {
            type: String,
            default: "/images/default_avatar.jpg",
        },
    },
    {
        timestamps: true,
    }
);

const UserSchema = mongoose.models.User || mongoose.model('User', userSchema)

export default UserSchema;