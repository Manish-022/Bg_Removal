// import mongoose from "mongoose";

// const connectDB = async () => {
//   mongoose.connection.on("connected", () => {
//     console.log("Database Connected");
//   });
//   await mongoose.connect(`${process.env.MONGODB_URI}/BgRemoval`);
// };

// export default connectDB;


//

import mongoose from "mongoose";

// Serverless connection caching
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
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 30000,
    };

    cached.promise = mongoose
      .connect(`${process.env.MONGODB_URI}/BgRemoval`, opts)
      .then((mongoose) => {
        console.log("Database Connected");
        return mongoose;
      })
      .catch((err) => {
        console.error("Database Connection Error:", err);
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

export default connectDB;