const { default: mongoose } = require("mongoose");
const User = require("../models/userModels");
// get method to get all users

const getallUsers = async (req, res) => {
  // async => بتضيفلنا شوية ويتنغ لحتى توصل البيانات اللي عنا
  try {
    const users = await User.find(); // بتجيب كل اليوزر على شكل ليست اوف جيسون
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

// req => الطلب اللي بوصلني من الفرونت
// res => الاستجابه اللي رح ترجع للفرونت
const createNewUser = async (req, res) => {
  console.log("this api for create user");
  try {
    const user = req.body;
    console.log(user);
    // create new user in the mongo model
    const newUser = new User(user);
    // save the user in the database
    await newUser.save(); // await => ما يعمل ريسبونس الا تا ينعمل سيف بشكل كامل
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error }); //500=> في مشكله في logic
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

// add function to delete user by id using params

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("this is the id", id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    const deleteUser = await User.findByIdAndDelete(id);

    if (!deleteUser) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json({ message: "User deleted successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

// create a controller function update user by id
const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, role } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      // عشان نتاكد من id
      return res.status(404).send("id not valid");
    }
    const userToUpdate = await User.findByIdAndUpdate(id, {
      username,
      email,
      role,
    });
    if (!userToUpdate) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json({ message: "User updated successfully" });
    }
  } catch {
    res.status(500).json({ message: error });
  }
};

// update all users buy role from admin to manager
// create a function to update all users by role from admin to manager
const updateAllUserByRole = async (req, res) => {
  try {
    const oldRole = req.body.oldRole;
    const newRole = req.body.newRole;
    const users = await User.updateMany({ role: oldRole }, { role: newRole });
    res.status(200).json(users);
  } catch {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  getallUsers,
  createNewUser,
  findUserByRole,
  deleteUserById,
  updateUserById,
  updateAllUserByRole,
};
