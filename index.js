const express = require("express");
const bcrypt = require("bcryptjs");
const { connectDB, getUsersCollection } = require("./db");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const users = getUsersCollection(); // ✅ Now it's guaranteed to be initialized

  try {
    const existingUser = await users.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await users.insertOne({ username, password: hashedPassword });

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

connectDB().then(() => {
  app.listen(8080, () => console.log("🚀 Server running on port 8080"));
});
