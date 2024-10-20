// sample data to simulate a database
let users = [
  { id: 1, email: "john.doe@example.com", name: "John Doe" },
  { id: 2, email: "jane.smith@example.com", name: "Jane Smith" },
  { id: 3, email: "alice.jones@example.com", name: "Alice Jones" },
  { id: 4, email: "bob.miller@example.com", name: "Bob Miller" },
  { id: 5, email: "sara.white@example.com", name: "Sara White" },
  { id: 6, email: "mike.jenkins@example.com", name: "Mike Jenkins" },
  { id: 7, email: "emily.clark@example.com", name: "Emily Clark" },
  { id: 8, email: "david.ross@example.com", name: "David Ross" },
  { id: 9, email: "lisa.hall@example.com", name: "Lisa Hall" },
  { id: 10, email: "alex.garcia@example.com", name: "Alex Garcia" },
];

const UserController = {
  getUsers: (req, res) => {
    res.json(users);
  },

  getUser: (req, res) => {
    const user = users.find((user) => user.id === parseInt(req.params.userId));

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      user: user,
    });
  },

  createUser: (req, res) => {
    const { name, email } = req.body;

    const newUser = {
      id: users.length + 1,
      name: name,
      email: email,
    };

    users.push(newUser);

    res.status(201).json({
      user: newUser,
    });
  },

  updateUser: (req, res) => {
    const { name, email } = req.body;

    const user = users.find((user) => user.id === parseInt(req.params.userId));

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name;
    user.email = email;

    res.json({
      user: user,
    });
  },

  deleteUser: (req, res) => {
    users = users.filter((user) => user.id !== parseInt(req.params.userId));

    res.json();
  },
};

module.exports = { UserController, users };
