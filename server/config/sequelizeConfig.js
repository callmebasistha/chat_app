const sequelize = require("./database");
const { Sequelize } = require("sequelize");
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
db.workspaces = require("../apis/workspace/workspaceModel")(sequelize);
db.users = require("../apis/users/userModel")(sequelize);
db.otps = require("../apis/otps/otpModel")(sequelize);

// sync databases
db.sequelize.sync({ force: false }).then(() => {
  console.log("re-sync is done");
});

module.exports = db;
