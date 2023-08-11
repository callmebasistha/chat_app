const otpService = require("./otpService");
let insert = (req, res) => {
  const body = req.body;
  otpService.insert(body, (result) => {
    return res.status(200).json({
      success: 1,
      data: result,
    });
  });
};

let verifyOtp = (req, res) => {
  const body = req.body;
  otpService.verifyOtp(body, (err, result) => {
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

module.exports = { insert, verifyOtp };
