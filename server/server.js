import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";

//App config
const PORT = process.env.PORT || 4000;
const app = express();

//initialize middleware
app.use(express.json());
app.use(cors());
//API Routes
app.get("/", (req, res) => res.send("API Working"));

// Async startup
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log("Server running on port " + PORT));
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

startServer();
