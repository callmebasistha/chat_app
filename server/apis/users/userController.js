const userService = require("./userService");

module.exports.insert = (req, res, next) => {
  const body = req.body;
  userService.insert(body, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: err.body,
      });
    }
    return res.status(200).json({
      success: 1,
      data: result,
    });
  });
};
