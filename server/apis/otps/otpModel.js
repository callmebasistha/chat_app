module.exports = (sequelize, DataTypes) => {
  const Otp = sequelize.define(
    "otp",
    {
      token: {
        type: DataTypes.STRING,
      },
      userId: DataTypes.INTEGER,
      expiry: DataTypes.DATE,
    },
    {
      tableName: "otp",
    }
  );
  return Otp;
};
