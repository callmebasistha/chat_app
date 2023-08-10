const userRoutes = require("./apis/users/userRouters");
const otpRoutes = require("./apis/otps/otpRoutes");

const router = [userRoutes, otpRoutes];

module.exports = router;
