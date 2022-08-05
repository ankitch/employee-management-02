const express = require("express");
const router = express.Router();
const { getUsers, postUsers } = require("../controllers/userController");

/* GET users listing. */
router.get("/", getUsers);

router.post("/", postUsers);

module.exports = router;
