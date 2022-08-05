const getUsers = (req, res, next) => {
  //db => users
  const users = [
    {
      name: "ankit",
      company: "innovate",
    },
    {
      name: "bishal",
      company: "islington",
    },
  ];
  res.status(200).json(users);
};

const postUsers = (req, res, next) => {
  const users = [
    {
      name: "ankit",
      company: "innovate",
    },
    {
      name: "bishal",
      company: "islington",
    },
  ];
  res.status(201).json([...users, req.body]);
};

const deleteUser = (req, res, next) => {
  res.send("delete");
};

module.exports = {
  getUsers,
  postUsers,
  deleteUser,
};
