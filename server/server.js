import { config } from "dotenv";
import express from "express";
import cors from "cors";
import path from "path"
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"

config();
const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));


app.use(express.json());

await connectDB();

app.use("/api/v1/auth", authRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serever is running at port number  ${PORT}`))