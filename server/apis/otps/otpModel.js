const { DataTypes } = require("sequelize");
const User = require("../users/userModel");

module.exports = (sequelize) => {
  const Otp = sequelize.define(
    "otp",
    {
      token: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
      expiry: DataTypes.DATE,
    },
    {
      tableName: "otp",
    },
    { underscored: true }
  );
  Otp.removeAttribute("id");
  Otp.associate = function () {
    Otp.belongsTo(User, { foreignKey: "user_id", sourceKey: "id" });
  };
  return Otp;
};
