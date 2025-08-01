import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";

//App config
const PORT = process.env.PORT || 4000;
const app = express();
await connectDB();

//initialize middleware
app.use(express.json());
app.use(cors());


//API Routes
app.get("/", (req, res) => res.send("API Working"));
app.use('/api/user', userRouter)
 app.use('/api/image',imageRouter)

// Async startup

// await connectDB();
app.listen(PORT, () => console.log("Server running on port " + PORT));


//Another code

// import "dotenv/config";
// import express from "express";
// import cors from "cors";
// import connectDB from "./configs/mongodb.js";

// const app = express();
// const PORT = process.env.PORT || 4000;

// // Initialize middleware
// app.use(express.json());
// app.use(cors());

// // API Routes
// app.get("/", (req, res) => res.send("API Working"));

// // Modified startup for serverless compatibility
// const startServer = async () => {
//   try {
//     await connectDB();
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   } catch (err) {
//     console.error("Failed to start server:", err);
//     process.exit(1);
//   }
// };

// // Start the server
// startServer();

// // Export for Vercel serverless
// export default app;