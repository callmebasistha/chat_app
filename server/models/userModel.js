module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      email: DataTypes.STRING,
      firstName: DataTypes.STRING,
      middleName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      dateOfBirth: DataTypes.STRING,
      // workspaceId: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: "workspace",
      //     key: "id",
      //   },
      // },
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
  User.associate = (models) => {
    User.hasOne(models.otp, { foreignKey: "userId" });
    User.belongsTo(models.workspace);
  };

  return User;
};
