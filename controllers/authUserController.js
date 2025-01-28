const AuthUserModel = require("../models/authUserModel");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "fhjsdjflksdjfkds";
const JWT_REFRESH_SECRET = "43j54kdjgskljg";

const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await AuthUserModel({ username, email, password });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await AuthUserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.status(200).json({ message: "Login successful" });
  } catch {
    res.status(500).json({ message: error });
  }
};

module.exports = { register, login };
