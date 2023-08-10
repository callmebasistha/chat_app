const otpService = require("./otpService");
let verifyOtp = (req, res) => {
  const body = req.body;
  otpService.insert(body, (result) => {
    return res.status(200).json({
      success: 1,
      data: result,
    });
  });
};

module.exports = { verifyOtp };
