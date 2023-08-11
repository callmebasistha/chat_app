module.exports = (sequelize, DataTypes) => {
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
  User.associate = function (models) {
    models.User.hasone(models.Otp, { foreignKey: "userId", as: "Otp" });
    models.User.belongsto(models.Workspace);
  };

  return User;
};
