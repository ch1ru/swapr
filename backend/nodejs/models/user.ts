import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    pubkey: String,
    username: String,
    bio: String,
    signature: String
});

const user = mongoose.model('users', userSchema);
export default user;