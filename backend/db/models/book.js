'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    googleLink: DataTypes.STRING,
    imageURL: DataTypes.STRING
  }, {});
  Book.associate = function(models) {
    Book.hasMany(models.Playlist, {foreignKey: 'bookId'})
  };
  return Book;
};
