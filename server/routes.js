const router = require("express").Router();
const UserController = require("./controllers/userController");
const OtpController = require("./controllers/otpController");

//user routes
router.post("/register", UserController.insert);

//otp routes
router.post("/verify-otp", OtpController.verifyOtp);
router.post("/resend-otp", OtpController.resendToken);

//workspace routes
//workspaceUser routes
module.exports = router;
