import express from "express";
import mongoose from "mongoose";
import User from "./Schema.js";

const app = express();
const mongo =
  "mongodb+srv://minhajsam1233:mentorpass@mentor.r7t4xhq.mongodb.net/TakeOffTest";

mongoose.connect(mongo).then(console.log("Connected to mongodb"));
app.use(express.json());

app.post("/add", async (req, res) => {
  const { name, age } = req.body;
  const user = await User.create({ name, age });
  console.log(req.body);
  if (!user) {
    res
      .status(400)
      .json({ status: "Fail", message: "Error while adding user" });
  }
  console.log(user);
  res.status(200).json({ status: "Success", data: user });
});
app.listen(3000, (err) => {
  if (err) {
    console.log(err, "Error when listening to port");
  } else {
    console.log("Listening on port 3000");
  }
});
