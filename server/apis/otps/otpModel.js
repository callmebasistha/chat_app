module.exports = (sequelize, DataTypes) => {
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
  Otp.associate = function (models) {
    models.Otp.belongsto(models.User);
  };
  return Otp;
};
