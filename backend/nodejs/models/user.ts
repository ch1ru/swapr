import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    pubkey: String,
    username: String,
    bio: String,
    avatar: String
});

const user = mongoose.model('users', userSchema);
export default user;