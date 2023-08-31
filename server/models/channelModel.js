module.exports = (sequelize, DataTypes) => {
  const Channel = sequelize.define(
    "channel",
    {
      name: {
        type: DataTypes.STRING,
      },
      // userId: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: "user",
      //     key: "id",
      //   },
      // },
    },
    {
      tableName: "channel",
    },
    { underscored: true }
  );
  Channel.associate = (models) => {
    Channel.belongsToMany(models.user, {
      through: "channelUser",
      as: "user",
    });
  };
  return Channel;
};
