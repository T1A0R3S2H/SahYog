import mongoose from "mongoose";

const MONGODB_URI = 'mongodb+srv://tarshswarnkar:2FlHRLRI5RsKppTb@sahyog.pkxzwkt.mongodb.net/?retryWrites=true&w=majority&appName=sahyog';

if (!MONGODB_URI) {
  throw new Error('MongoDB URI is not defined');
}

/**
 * Global is used to maintain a cached connection across hot reloads in development.
 * This prevents connections growing exponentially during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  console.log(`MongoDb Connected: ${cached.conn.connection.host}`);
  return cached.conn;
};

export default connectDB;
