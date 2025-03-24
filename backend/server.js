import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //to parse req.body
app.use(express.urlencoded({ extended: true })); //to parse from data

app.use(cookieParser());
app.use("/api/auth", authRoutes);


app.get('/', (req, res) => {
    res.send('Server is working!'); 
}); 

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
    connectMongoDB();
});