const express = require("express");
const cors = require("cors");
const app = express();
const sequelize = require("./config/database");
const { Sequelize, DataTypes } = require("sequelize");
const routes = require("./routes");

let corsOption = {
  origin: "http://localhost:3000",
};
//middileware
app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//test
app.get("/", (req, res) => {
  res.json({ message: "response from server" });
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server started on port ${process.env.SERVER_PORT}`);
});

// start database
sequelize
  .authenticate()
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

//database model configs
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//models defination
// const UserModel = require("./apis/users/userModel.js");
db.users = require("./apis/users/userModel")(sequelize, DataTypes);
db.otps = require("./apis/otps/otpModel")(sequelize, DataTypes);
// db.users = new UserModel(sequelize, DataTypes);

console.log("User : " + db.users);
// sync databases
db.sequelize.sync({ force: false }).then(() => {
  console.log("re-sync is done");
});

module.exports = db;
const router = require("./routes");
app.use("/api", router);
