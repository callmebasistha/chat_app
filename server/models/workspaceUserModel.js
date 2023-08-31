module.exports = (sequelize, DataTypes) => {
  const WorkspaceUser = sequelize.define(
    "workspaceUser",
    {
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      tableName: "workspaceUser",
    },
    { underscored: true }
  );
  return WorkspaceUser;
};
