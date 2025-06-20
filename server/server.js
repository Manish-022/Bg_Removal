// import "dotenv/config";
// import express from "express";
// import cors from "cors";
// import connectDB from "./configs/mongodb.js";

// //App config
// const PORT = process.env.PORT || 4000;
// const app = express();
// await connectDB();

// //initialize middleware
// app.use(express.json());
// app.use(cors());
// //API Routes
// app.get("/", (req, res) => res.send("API Working"));

// // Async startup

// // await connectDB();
// app.listen(PORT, () => console.log("Server running on port " + PORT));

import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";

const PORT = process.env.PORT || 4000;
const app = express();

// Initialize middleware
app.use(express.json());
app.use(cors());

// API Routes
app.get("/", (req, res) => res.send("API Working"));

// Start server after DB connection
async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => console.log("Server running on port " + PORT));
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
