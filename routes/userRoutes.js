const express = require("express");
const cors = require("cors");
const routes = express.Router();
const {
  getallUsers,
  createNewUser,
  findUserByRole,
} = require("../controllers/userController");

routes.get("/users", getallUsers);
routes.post("/users", createNewUser);
routes.post("/users/role", findUserByRole);

module.exports = routes;
