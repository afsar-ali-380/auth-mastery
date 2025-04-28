const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected successfuly");
  })
  .catch((err) => {
    console.log("Something went wrong with database connectivity", err);
  });
