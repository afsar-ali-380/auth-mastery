const { check } = require("express-validator");

exports.registerUserValidations = [
  check("firstName")
    .notEmpty()
    .withMessage("first name is required")
    .isAlpha()
    .withMessage("First name should contain only letters"),
  check("lastName")
    .notEmpty()
    .withMessage("Last name is required")
    .isAlpha()
    .withMessage("Last name should contain only letters"),
  check("email")
    .isEmail()
    .withMessage("Please provide valid email")
    .normalizeEmail(),
  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

exports.loginUserValidations = [
  check("email").isEmail().withMessage("Please provide a valid email address."),
  check("password")
    .notEmpty()
    .withMessage("Password is required.")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long."),
];
