const { DataTypes } = require("sequelize");
const User = require("../users/userModel");

module.exports = (sequelize) => {
  const Workspace = sequelize.define(
    "workspace",
    {
      name: DataTypes.TEXT,
      description: DataTypes.TEXT,
      createdBy: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "workspace",
    },
    { underscored: true }
  );
  Workspace.associate = (models) => {
    Workspace.hasMany(models.User, { foreignKey: "workspaceId", as: "Users" });
  };
  return Workspace;
};
