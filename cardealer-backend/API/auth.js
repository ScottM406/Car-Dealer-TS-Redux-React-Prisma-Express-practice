const express = require("express");
const jwt = require("jsonwebtoken");
const prisma = require("../prisma");
const JWT_SECRET = process.env.JWT_SECRET;
const router = express.Router();

const createToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, { expiresIn: "24h"});
};

router.use(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.slice(7);
  if (!token) return next();

  try {
    const { id } = jwt.verify(token, JWT_SECRET);
    const user = await prisma.user.findUniqueOrThrow({
      where: { id },
    });
    req.user = user;
    next();  
  } catch (e) {
    next(e);
  }
});

router.post("/register", async (req, res, next) => {
  const { email, password} = req.body;
  try {
    const user = await prisma.user.register(email, password);
    const token = createToken(user.id);
    res.status(201).json({ token });
  } catch (e) {
    next(e);
  }
});

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.login(email, password);
    const token = createToken(user.id);
    res.json({ token });
  } catch (e) {
    next(e);
  }
});

const authenticate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    next({ status: 401, message: "You must be logged in for this request."})
  }
};

module.exports = {
  router,
  authenticate
}