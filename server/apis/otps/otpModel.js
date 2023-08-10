const { DataTypes } = require("sequelize");

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
  return Otp;
};
