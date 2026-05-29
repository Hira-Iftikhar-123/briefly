const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models/user.model');
const { env } = require('../config/env');
const { created, success, fail } = require('../utils/api-response');

async function register(req, res) {
  const { name, email, password, role } = req.body;
  const exists = await User.findOne({ email });
  if (exists) {
    return fail(res, 409, 'Email is already registered');
  }

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed, role });
  return created(res, { id: user.id, email: user.email, role: user.role }, 'User registered');
}

async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return fail(res, 401, 'Invalid credentials');
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return fail(res, 401, 'Invalid credentials');
  }

  const token = jwt.sign({ sub: user.id, role: user.role }, env.jwtSecret, { expiresIn: '1h' });
  return success(res, { token, user: { id: user.id, email: user.email, role: user.role } }, 'Logged in');
}

function profile(req, res) {
  return success(res, req.user, 'Profile fetched');
}

module.exports = { register, login, profile };
