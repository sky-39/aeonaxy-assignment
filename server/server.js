import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDb from "./db/connectToMongoDb.js";
import path from "path";

const app = express();
const PORT = process.env.PORT || 8000;
const __dirname = path.resolve();

dotenv.config();

app.use(express.json({ limit: "25mb" }));

app.use("/api/auth", authRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});


app.listen(8000, () => {
  connectToMongoDb();
  console.log(`server is listening on ${PORT}`);
});
