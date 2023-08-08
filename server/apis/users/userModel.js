module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      email: DataTypes.STRING,
      firstName: DataTypes.STRING,
      middleName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      dateOfBirth: DataTypes.STRING,
    },
    {
      tableName: "user",
    }
  );
  return User;
};
