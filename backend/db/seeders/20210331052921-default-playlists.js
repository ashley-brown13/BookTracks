'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Playlists',
    [
      {
       "title": "Twilight Vibes",
       "description": "Only the rainy songs",
       "spotifyLink": 'https://open.spotify.com/playlist/3J9YUqDKzAxaEGECSsg25L?si=CXKFMlNnReGsgZv5N3Ci9g',
       "imageURL": 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Old-black-appalachian-trail-tnnc1.jpg/1200px-Old-black-appalachian-trail-tnnc1.jpg',
       "bookId": 120,
       "userId": 10,
       "createdAt": new Date(),
       "updatedAt": new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Playlists', null, {});
  }
};
