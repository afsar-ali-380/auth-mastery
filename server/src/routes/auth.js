const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/auth");
const validators = require("../utils/validators");

authRouter.post(
  "/user/register",
  validators.registerUserValidations,
  authController.registerUser
);

authRouter.post(
  "/user/login",
  validators.loginUserValidations,
  authController.loginUser
);

module.exports = authRouter;
