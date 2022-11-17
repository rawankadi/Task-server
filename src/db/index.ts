import mongoose from "mongoose";

const connectDb = async () => {
    await mongoose.connect("mongodb+srv://rawankadi:Rawan1234@cluster0.fka3c9r.mongodb.net/TaskDB")
    .then(() => {
        console.log('Connected to DB..');
      });
};

export { connectDb }