const router = require("express").Router();
const { insert } = require("./userController");

router.post("/register", insert);

module.exports = router;
