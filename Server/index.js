const express = require("express");
const app = express();
const port = 3000;
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(express.json());

app.use(cors());

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

const userRoutes = require("./routes/users.route.js");

app.get("/", (req, res) => {
  res.send("Hello, TradeMaster Dashboard!");
});

app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
