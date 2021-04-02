'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 50]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    spotifyLink: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [81, 100]
      }
    },
    imageURL: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      }
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Playlist.associate = function(models) {
    Playlist.belongsTo(models.User, {foreignKey: 'userId'})
    Playlist.belongsTo(models.Book, {foreignKey: 'bookId'})
    Playlist.hasMany(models.Like, {foreignKey: 'playlistId'})
  };
  return Playlist;
};
