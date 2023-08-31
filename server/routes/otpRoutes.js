const router = require("express").Router();
const OtpController = require("../controllers/otpController");


router.post("/verify-otp", OtpController.verifyOtp);

module.exports = router;
