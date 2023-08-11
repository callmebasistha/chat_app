// const User = require("../apis/users/userModel");
// const Workspace = require("../apis/workspace/workspaceModel");
// const Otp = require("../apis/otps/otpModel");

// // workspace relations
// Workspace.associate = function (models) {
//   Workspace.hasMany(models.User, { foreignKey: "workspaceId", as: "Users" });
// };

// // user relations
// User.associate = function (models) {
//   User.belongsTo(models.Workspace, {
//     foreignKey: "workspaceId",
//     sourceKey: "id",
//   });
// };

// // otp relations
// Otp.associate = function (models) {
//   Otp.belongsTo(models.User, { foreignKey: "user_id", sourceKey: "id" });
// };
