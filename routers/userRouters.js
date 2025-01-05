const express = require("express");
const router = express.Router();
const {
  getallUsers,
  createNewUser,
  findUserByRole,
} = require("../controllers/userController");

router.get("/users", getallUsers);
router.post("/users", createNewUser);
router.post("/users/role", findUserByRole);
module.exports = router;
