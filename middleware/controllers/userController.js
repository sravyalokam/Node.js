const db = require("../utils/fakeDB");

exports.getUsers = (req, res) => {
  res.json(db.users);
};

exports.createUser = (req, res, next) => {
  try {
    const { name, email } = req.body;

    const newUser = { id: Date.now(), name, email };
    db.users.push(newUser);

    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

exports.getProfile = (req, res) => {
  res.json({ message: "Profile fetched", user: req.user });
};
