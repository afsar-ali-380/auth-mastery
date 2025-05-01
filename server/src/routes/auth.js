const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/auth");
const validators = require("../utils/validators");

authRouter.post(
  "/register",
  validators.registerUserValidations,
  authController.registerUser
);

authRouter.post(
  "/login",
  validators.loginUserValidations,
  authController.loginUser
);

module.exports = authRouter;
