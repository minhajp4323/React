import express from "express";
import mongoose from "mongoose";
import User from "./Schema.js";

const app = express();
const mongo =
  "mongodb+srv://minhajsam1233:mentorpass@mentor.r7t4xhq.mongodb.net/TakeOffTest";

mongoose.connect(mongo).then(console.log("Connected to mongodb"));
app.use(express.json());

//post
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
//get

app.get("/get", async (req, res) => {
  const getUser = await User.find();

  if (!getUser) {
    res.status(404).json({ status: "Not found", message: "data not found" });
  } else {
    res.status(200).json({
      status: "Success",
      message: "Successfully fetched the data",
      data: getUser,
    });
  }
});

app.get("/getbyid/:id", async (req, res) => {
  const userId = req.params.id;
  const getById = await User.findById(userId);

  if (!userId) {
    res.status(404).json({ status: "Not found", message: "User  not found" });
  } else {
    res.status(200).json({
      status: "Success",
      message: "Succesffulyy fetched uer by id",
      data: getById,
    });
  }
});

app.delete("/deleteById/:id", async (req, res) => {
  const userId = req.params.id;
  const deleteById = await User.findByIdAndDelete(userId);
  if (!deleteById) {
    res.status(404).json({ status: "Not found", message: "User not found" });
  } else {
    res.status(200).json({
      status: "Success",
      message: "Successfully deleted",
      data: deleteById,
    });
  }
});

app.put("/updatebyid/:id", async (req, res) => {
  const userId = req.params.id;
  const value = req.body;
  const { name, age } = value;

  const updateUser = await User.findByIdAndUpdate(userId, {
    $set: { ...value },
  });

  if (!updateUser) {
    res.status(404).json({ status: "Not found", message: "User not found" });
  } else {
    res.status(200).json({
      status: "Success",
      message: "Updated successfully",
      data: updateUser,
    });
  }
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err, "Error when listening to port");
  } else {
    console.log("Listening on port 3000");
  }
});
