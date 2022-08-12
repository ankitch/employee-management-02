const UserModel = require("../ models/user");

const getUsers = async (req, res, next) => {
  const users = await UserModel.find();
  res.status(200).json(users);
};

const postUsers = async (req, res, next) => {
  const user = new UserModel({ ...req.body });
  const userData = await user.save();

  res.status(201).json(userData);
};

const deleteUser = (req, res, next) => {
  res.send("delete");
};

module.exports = {
  getUsers,
  postUsers,
  deleteUser,
};
