import Express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user-route.js'
dotenv.config();

const app = Express();

mongoose
  .connect(process.env.MONGO_URI)
  .then((connect) => {
    console.log("Database is connected succussfully");
  })
  .catch((err) => {
    console.log("error while connecting Database");
  });

app.listen(3000, () => console.log("server is listening on port 3000"));

// handeling routing request
app.use('/test', userRouter)
