const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());

// app.use(cors({ origin: "http://localhost:5173" }));

const usersRouter = require("./API/users");

app.use("/users", usersRouter);

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.use((req, res, next) => {
  next({ status: 404, message: "Endpoint not found. Please re-check and try again." });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500);
  res.json(err.message || "Internal Server Error.");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
