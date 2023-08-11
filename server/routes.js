const router = require("express").Router();
const UserController = require("./apis/users/userController");
const OtpController = require("./apis/otps/otpController");

//user routes
router.post("/register", UserController.insert);

//otp routes
router.post("/verify-otp", OtpController.verifyOtp);

//workspace routes
//workspaceUser routes
module.exports = router;
