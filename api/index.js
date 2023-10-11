import Express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-route.js";
import authRouter from "./routes/auth-route.js";
dotenv.config();

const app = Express();
app.use(Express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then((connect) => {
    console.log("Database is connected successfully");
  })
  .catch((err) => {
    console.log("error while connecting Database");
  });

app.listen(3000, () => console.log("server is listening on port 3000"));

// handeling routing request
app.use("/test", userRouter);
app.use("/signup", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
