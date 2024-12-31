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

module.exports = { getallUsers };
