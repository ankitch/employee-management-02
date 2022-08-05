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

module.exports = {
  getUsers,
  postUsers,
};
