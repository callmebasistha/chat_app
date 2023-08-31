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
    },
    { underscored: true }
  );
  User.associate = (models) => {
    User.hasOne(models.otp, { foreignKey: "userId" });
    User.belongsToMany(models.workspace, {
      through: "workspaceUser",
      as: "workspace",
    });
    User.belongsToMany(models.channel, {
      through: "channelUser",
      as: "channel",
    });
  };

  return User;
};
