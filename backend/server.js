import express from "express";
import data from "./data.js";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import dotenv from "dotenv";
import orderRouter from "./routers/orderRouter.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const MONGODB_URL =
//   "mongodb+srv://huypham:1234@cluster0.jl4o2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/vivo-smartphone-app",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!");
});

app.use(cors()); // Use this after the variable declaration

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.use("/api/users", userRouter);

app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
