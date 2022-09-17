exports.createPollGetController = (req, res, next) => {
  res.render("create");
};
exports.createPollPostController = (req, res, next) => {
  let { title, description, options } = req.body;
  options = options.map((obj) => {
    return {
      name: obj,
      vote: 0,
    };
  });
  res.render("create");
};
