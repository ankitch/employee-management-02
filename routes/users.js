const express = require("express");
const router = express.Router();
const {
  getUsers,
  postUsers,
  deleteUser,
} = require("../controllers/userController");

/* GET users listing. */
router.get("/", getUsers);

router.post("/", postUsers);
router.delete("/", deleteUser);

module.exports = router;
