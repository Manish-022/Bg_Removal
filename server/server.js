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

// File: api/server.js

import express from "express";
import serverlessExpress from "@vendia/serverless-express";
import connectDB from "./configs/mongodb.js";

import "dotenv/config";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("✅ API Working from Vercel");
});

// Ensure DB is connected before exporting the handler
let server;

const start = async () => {
  await connectDB();
  server = serverlessExpress({ app });
};

await start();

export default server;
