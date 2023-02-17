import mongoose from "mongoose";

export default function connectDB() {
    //connect to mongodb
    mongoose.connect(
        'mongodb://mongo:27017/userdb'
    )
    .then(() => console.log('MongoDB Connected'))
    .catch((err: unknown) => console.log(err));
}