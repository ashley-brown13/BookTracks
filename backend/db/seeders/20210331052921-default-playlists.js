'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Playlists',
    [
      {
       "title": "Twilight Vibes",
       "description": "Only the rainy songs",
       "spotifyLink": 'https://open.spotify.com/playlist/3J9YUqDKzAxaEGECSsg25L?si=CXKFMlNnReGsgZv5N3Ci9g',
       "imageURL": 'https://survivalcommonsense.com/wp-content/uploads/2014/05/rainy-weather-in-forest--600x300.jpg',
       "bookId": 90,
       "userId": 7,
       "createdAt": new Date(),
       "updatedAt": new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Playlists', null, {});
  }
};
