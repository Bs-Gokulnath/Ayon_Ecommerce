const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb+srv://bsgokulnath18:gokul%2318@backendprac1.wvwyk.mongodb.net/ayon?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// User schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String, default: "" },
});

const User = mongoose.model("User", userSchema);

// Routes

// Signup Route
app.post("/users", async (req, res) => {
  const { name, email, phone, password, address } = req.body;

  if (!name || !email || !phone || !password) {
    return res.status(400).send("Please fill all required fields.");
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    const newUser = new User({ name, email, phone, password, address });
    await newUser.save();
    res.status(201).send({ message: "User created successfully", user: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Login Route
app.post("/users/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Email and password are required.");
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send("User not found");
    }

    if (user.password !== password) {
      return res.status(401).send("Incorrect password");
    }

    res.status(200).send({ message: "Login successful", user });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Default Route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
