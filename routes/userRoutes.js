const express = require("express");
const cors = require("cors");
const routes = express.Router();
const {
  getallUsers,
  createNewUser,
  findUserByRole,
  deleteUserById,
} = require("../controllers/userController");

routes.get("/users", getallUsers);
routes.post("/users", createNewUser);
routes.post("/users/role", findUserByRole);
routes.delete("/deleteUser/:id", deleteUserById);

module.exports = routes;
