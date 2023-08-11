const { DataTypes } = require("sequelize");
const Otp = require("../otps/otpModel");
const Workspace = require("../workspace/workspaceModel");

module.exports = (sequelize) => {
  const User = sequelize.define(
    "user",
    {
      email: DataTypes.STRING,
      firstName: DataTypes.STRING,
      middleName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      dateOfBirth: DataTypes.STRING,
      workspaceId: {
        type: DataTypes.INTEGER,
        references: {
          model: "workspace",
          key: "id",
        },
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      tableName: "user",
    },
    { underscored: true }
  );
  User.associate = function () {
    User.hasOne(Otp, { foreignKey: "userId", as: "Otp" });
  };
  User.associate = () => {
    User.belongsTo(Workspace, {
      foreignKey: "workspaceId",
      sourceKey: "id",
    });
  };

  return User;
};
