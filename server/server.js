import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";

//App config
const PORT = process.env.PORT || 4000;
const app = express();
await connectDB();

//initialize middleware
app.use(express.json());
app.use(cors());
//API Routes
app.get("/", (req, res) => res.send("API Working"));

// Async startup

// await connectDB();
app.listen(PORT, () => console.log("Server running on port " + PORT));
