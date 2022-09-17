const { urlencoded } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const port = 5000;
const app = express();
app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.json());
app.use(urlencoded({ extends: false }));
app.get("/", (req, res) => {
  res.render("home");
});
mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => {
    app.listen(port, () => {
      console.log(`server is listen on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(`This is a error`);
  });
