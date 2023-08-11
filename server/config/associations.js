// import { User } from "../apis/users/userModel";
// import { Workspace } from "../apis/workspace/workspaceModel";
// import { Otp } from "../apis/otps/otpModel";

// workspace relations
// Workspace.associate = (models) => {
//   Workspace.hasMany(models.User, { foreignKey: "workspaceId", as: "Users" });
// };

// // user relations
// User.associate = (models) => {
//   User.belongsTo(models.Workspace, {
//     foreignKey: "workspaceId",
//     sourceKey: "id",
//   });
// };

// // otp relations
// Otp.associate = (models) => {
//   Otp.belongsTo(models.User, { foreignKey: "user_id", sourceKey: "id" });
// };
