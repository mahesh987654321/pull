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
const pollController = require("./pollController");
app.get("/", (req, res) => {
  res.render("home");
});

// app.post("/create", (req, res) => {
//   res.render("create");
// });
app.get("/create", pollController.createPollGetController);
app.post("/create", pollController.createPollPostController);
app.get("/polls", pollController.getAllPolls);
app.get("/polls/:id", pollController.viewPollGetController);
mongoose
  .connect("mongodb://localhost:27017/express")
  .then(() => {
    app.listen(port, () => {
      console.log(`server is listen on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(`This is a error`);
  });
