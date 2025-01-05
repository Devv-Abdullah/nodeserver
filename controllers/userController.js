const User = require("../models/userModels");
// get method to get all users

const getallUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

const createNewUser = async (req, res) => {
  console.log("this api for create user");
  try {
    const user = req.body;
    console.log(user);
    // create new user in the mongo model
    const newUser = new User(user);
    // save the user in the database
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

const findUserByRole = async (req, res) => {
  try {
    const role = req.body.role;
    console.log(role);
    const users = await User.find({ role: role });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { getallUsers, createNewUser, findUserByRole };
