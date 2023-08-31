module.exports = function (sequelize, DataTypes) {
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
    Workspace.belongsToMany(models.user, {
      through: "workspaceUser",
      as: "user",
    });
  };
  return Workspace;
};
