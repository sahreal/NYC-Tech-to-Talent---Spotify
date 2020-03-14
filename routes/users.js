const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const validateLogin = "../controllers/login.js";
// Load User model
const User = "../models/Users.js";
