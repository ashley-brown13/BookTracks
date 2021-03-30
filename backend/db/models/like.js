'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    playlistId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Like.associate = function(models) {
    Like.belongsTo(models.User, {foreignKey: 'userId'})
    Like.belongsTo(models.Playlist, {foreignKey: 'playlistId'})
  };
  return Like;
};
