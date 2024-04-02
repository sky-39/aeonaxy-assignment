import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDb from "./db/connectToMongoDb.js";

const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config();

app.use(express.json());

app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.listen(8000, () => {
  connectToMongoDb();
  console.log(`server is listening on ${PORT}`);
});