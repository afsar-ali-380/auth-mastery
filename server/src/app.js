require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

require("./connect");

app.use(
  cors({
    origin: "http://localhost:3000", // exactly match frontend URL
    credentials: true, // allow cookies/credentials
  })
);

app.use(express.json());

const notFound = require("./controllers/notFound");
const authRouter = require("./routes/auth");

app.use("/auth", authRouter);

app.use("/", (req, res) => {
  res.send("<h1>Hello from server</h1>");
});

app.use((req, res) => {
  notFound();
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
