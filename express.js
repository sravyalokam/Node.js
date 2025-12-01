const express = require('express');
const app = express();

app.use(express.json());

let users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" }
];

app.get('/', (req, res) => {
    res.json({ message: "Home Page" });
});

app.get('/about', (req, res) => {
    res.json({ message: "About us page" });
});

app.get('/contact', (req, res) => {
    res.json({ message: "Contact us page" });
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
});

app.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ message: "Name and email are required" });

    const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        name,
        email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: "User not found" });

    const { name, email } = req.body;
    if (name) user.name = name;
    if (email) user.email = email;

    res.json(user);
});

app.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).json({ message: "User not found" });

    const deletedUser = users.splice(userIndex, 1);
    res.json(deletedUser[0]);
});

app.use((req, res) => {
    res.status(404).json({ message: "NOT FOUND" });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
