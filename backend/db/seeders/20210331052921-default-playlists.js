'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Playlists',
    [
      {
       "title": "Twilight Vibes",
       "description": "Only the rainy songs",
       "spotifyLink": 'https://open.spotify.com/playlist/3J9YUqDKzAxaEGECSsg25L?si=CXKFMlNnReGsgZv5N3Ci9g',
       "imageURL": 'https://storage.needpix.com/thumbs/spooky-2800116_1280.jpg',
       "bookId": 30,
       "userId": 1,
       "createdAt": new Date(),
       "updatedAt": new Date()
      },
      {
        "title": "Sad Twilight Songs",
        "description": "Feeling like a good cry? Look no further than this playlist. Grab the tissues and settle in for an emotional start to the saga.",
        "spotifyLink": 'https://open.spotify.com/playlist/6QLO58G3yddlxRRZvBdPgX?si=2wR42I-_RiGkWkM4iHWgdA',
        "imageURL": 'https://decider.com/wp-content/uploads/2020/05/twilight-movies-gallery-04.jpg?quality=80&strip=all&w=680&h=356&crop=1',
        "bookId": 30,
        "userId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
       },
       {
        "title": "Twilight Instrumental",
        "description": "Travel through Bella's start in Forks with a beautiful symphony. Including only instrumental songs, this playlist won't distract you from your reading of this amazing love story.",
        "spotifyLink": 'https://open.spotify.com/playlist/7c2lzo7L7S8YhI1Qi44wUh?si=eB6GyHoCQQOnPvbeM-Pctw',
        "imageURL": 'https://i.pinimg.com/originals/6d/ea/da/6deadaaa0cbcbd23c961b089a80576f0.jpg',
        "bookId": 30,
        "userId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
       },
       {
        "title": "The Tunnel Scene Feeling",
        "description": "So you can feel infinite while reading!",
        "spotifyLink": 'https://open.spotify.com/playlist/6CEsaEVNQPM0ZmSsNeqMBY?si=fWvfy0e3SdqSNAPCaRwSPA',
        "imageURL": 'https://images.8tracks.com/cover/i/000/605/197/the-perks-of-being-a-wallflower-tunnel-8328.jpg?rect=350,0,900,900&q=98&fm=jpg&fit=max',
        "bookId": 1,
        "userId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
       },
       {
        "title": "it's tuesday pooh bear",
        "description": "cause today is his favorite day",
        "spotifyLink": 'https://open.spotify.com/playlist/5bYajCNmWhZmMRrZ1iwMJY?si=VZZ5WpLpQb-8yQaqVmhlMQ',
        "imageURL": 'https://lumiere-a.akamaihd.net/v1/images/c94eed56a5e84479a2939c9172434567c0147d4f.jpeg?region=0,0,600,600',
        "bookId": 3,
        "userId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
       },
       {
        "title": "Charlie's List",
        "description": "The playlist is...Charlie, his essence...his list. His composition of the mixtape leads us here.",
        "spotifyLink": 'https://open.spotify.com/playlist/2J6NDkTXI3K6eSnOGMnpcr?si=_0YSgXNbS6G3U6HNHgEIeg',
        "imageURL": 'https://cdn3.movieweb.com/i/article/G0NayrcEwEBEi4Mr0lMBn1cfTLwzUX/1200:100/The-Perks-Of-Being-A-Wallflower-A-Toast.jpg',
        "bookId": 1,
        "userId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
       },
       {
        "title": "Twilight Best Songs",
        "description": "Only the best songs for the best book!!!",
        "spotifyLink": 'https://open.spotify.com/playlist/2fC9lHzFdbcKnpyQpTyLik?si=C8H0sY18TLuWxlAosmaoKg',
        "imageURL": 'https://imgs.capitalfm.com/images/176038?crop=16_9&width=660&relax=1&signature=JJ3FiPPnE3P7w4pntYgxvVXtyR0=',
        "bookId": 30,
        "userId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
       },
       {
        "title": "Reading Twilight",
        "description": "For when you're reading Twilight. Not all songs are from the movies, but still have a strong Twilight vibe to them.",
        "spotifyLink": 'https://open.spotify.com/playlist/0psIBLCulLVrPeXHYE4HQJ?si=S7HE_2kiTz6WCQ64yXnpuw',
        "imageURL": 'http://images4.fanpop.com/image/photos/22800000/Yes-he-is-a-guy-reading-Twilight-kaleb-nation-22852339-604-289.jpg',
        "bookId": 30,
        "userId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
       },
       {
        "title": "patrick, the perks of being a wallflower",
        "description": "songs that remind me of patrick/his and brads relationship",
        "spotifyLink": 'https://open.spotify.com/playlist/0eYQ2x1nJgoRn1e6BfCGCu?si=9n8ro_xXTamwSIu1mQhJ9w',
        "imageURL": 'https://hiddenchief2.files.wordpress.com/2013/11/ezra-miller-patrick-perks.jpg',
        "bookId": 1,
        "userId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
       },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Playlists', null, {});
  }
};
