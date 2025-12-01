let users = [
  { id: 1, name: "Sravya", email: "sravya@example.com" },
  { id: 2, name: "Rahul", email: "rahul@example.com" }
];

// GET ALL USERS
export const getUsers = (req, res) => {
  res.json({ success: true, users });
};

// GET USER BY ID
export const getUserById = (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) return res.status(404).json({ message: "User not found" });

  res.json({ success: true, user });
};

// CREATE USER
export const createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email)
    return res.status(400).json({ message: "Name and Email required" });

  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);
  res.status(201).json({ success: true, user: newUser });
};

// UPDATE USER
export const updateUser = (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) return res.status(404).json({ message: "User not found" });

  const { name, email } = req.body;

  if (name) user.name = name;
  if (email) user.email = email;

  res.json({ success: true, user });
};

// DELETE USER
export const deleteUser = (req, res) => {
  const id = Number(req.params.id);
  users = users.filter(u => u.id !== id);

  res.json({ success: true, message: "User deleted" });
};
