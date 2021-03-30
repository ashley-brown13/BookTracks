'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    spotifyLink: DataTypes.STRING,
    imageURL: DataTypes.STRING,
    bookId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Playlist.associate = function(models) {
    Playlist.belongsTo(models.User, {foreignKey: 'userId'})
    Playlist.belongsTo(models.Book, {foreignKey: 'bookId'})
    Playlist.hasMany(models.Like, {foreignKey: 'playlistId'})
  };
  return Playlist;
};
