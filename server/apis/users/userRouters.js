const router = require("express").Router();
const userController = require("./userController");

router.post("/register", insert);

module.exports = router;
