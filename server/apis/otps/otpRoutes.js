const router = require("express").Router();
const { verifyOtp } = require("./otpController");

router.post("/verify-otp", verifyOtp);

module.exports = router;
