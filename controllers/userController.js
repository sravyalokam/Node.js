let users = [
  { id: 1, name: "Sravya", email: "sravya@example.com", age: 22 },
  { id: 2, name: "Rahul", email: "rahul@example.com", age: 26 }
];

exports.getUsers = (req, res) => {
  let result = [...users];

  if (req.query.search) {
    const search = req.query.search.toLowerCase();
    result = result.filter(u =>
      u.name.toLowerCase().includes(search) ||
      u.email.toLowerCase().includes(search)
    );
  }

  if (req.query.minAge && req.query.maxAge) {
    result = result.filter(
      u => u.age >= Number(req.query.minAge) && u.age <= Number(req.query.maxAge)
    );
  }

  res.json({ success: true, users: result });
};

exports.getUserById = (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) return res.status(404).json({ message: "User not found" });
  res.json({ success: true, user });
};


exports.getUserOrders = (req, res) => {
  const id = Number(req.params.id);

  const dummyOrders = [
    { userId: 1, orderId: 101, item: "Laptop", price: 55000 },
    { userId: 1, orderId: 102, item: "Phone", price: 15000 },
    { userId: 2, orderId: 103, item: "Keyboard", price: 2000 }
  ];

  
  let result = dummyOrders.filter(o => o.userId === id);


  if (req.query.limit) result = result.slice(0, Number(req.query.limit));

  res.json({ success: true, orders: result });
};


exports.createUser = (req, res) => {
  const { name, email, age } = req.body;

  if (!name || !email)
    return res.status(400).json({ message: "Name and Email required" });

  const newUser = {
    id: users.length + 1,
    name,
    email,
    age: age || null
  };

  users.push(newUser);
  res.status(201).json({ success: true, user: newUser });
};


exports.updateUser = (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) return res.status(404).json({ message: "User not found" });

  const { name, email, age } = req.body;

  if (name) user.name = name;
  if (email) user.email = email;
  if (age) user.age = age;

  res.json({ success: true, user });
};


exports.deleteUser = (req, res) => {
  const id = Number(req.params.id);
  users = users.filter(u => u.id !== id);

  res.json({ success: true, message: "User deleted" });
};


exports.uploadAvatar = (req, res) => {
  if (!req.file)
    return res.status(400).json({ message: "Please upload an image" });

  res.json({
    success: true,
    message: "File uploaded",
    file: req.file
  });
};




