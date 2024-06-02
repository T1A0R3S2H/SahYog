import mongoose from "mongoose";

const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        return;
    }

    try {
        const conn = await mongoose.connect('mongodb+srv://tarshswarnkar:2FlHRLRI5RsKppTb@sahyog.pkxzwkt.mongodb.net/?retryWrites=true&w=majority&appName=sahyog');
        console.log(`MongoDb Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;
