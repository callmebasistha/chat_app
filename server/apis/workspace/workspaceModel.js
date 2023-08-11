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
  Workspace.associate = function (models) {
    models.Workspace.hasmany(models.User, {
      foreignKey: "workspaceId",
      as: "user",
    });
  };
  return Workspace;
};
