const router = require("express").Router();
const UserController = require("./controllers/userController");
const OtpController = require("./controllers/otpController");
const WorkspaceController = require("./controllers/workspaceController");

//user routes
router.post("/register", UserController.insert);

//otp routes
router.post("/verify-otp", OtpController.verifyOtp);
router.post("/resend-otp", OtpController.resendToken);

//workspace routes
router.post("/create-workspace", WorkspaceController.CreateWorkspace);

// channel routes
module.exports = router;
