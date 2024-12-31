const express = require("express");
const router = express.Router();
const { getallUsers } = require("../controllers/userController");

router.get("/users", getallUsers);
module.exports = router;
