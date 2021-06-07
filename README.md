<p align="center">
  <img width="300px" src="https://github.com/ashley-brown13/BookTracks/blob/main/frontend/public/images/Screen%20Shot%202021-06-04%20at%202.53.41%20PM.png" alt="title and logo">
</p>

BookTracks, a Bandcamp clone, allows users to upload and find their favorite playlists for books. Inspired by my reading of independent books in which authors list the songs they listened to while writing the book, I wanted to design an application where everyone can list the songs they like for novels.

![Home Page](https://github.com/ashley-brown13/BookTracks/blob/main/frontend/public/images/Screen%20Shot%202021-06-04%20at%202.12.36%20PM.png)

## Link to live site
https://book-tracks.herokuapp.com/

## Site Wiki
https://github.com/ashley-brown13/BookTracks/wiki

## Technologies
* Express
* Bcrypt
* React
* Redux
* Sequelize

I used Sequelize and Express to design the backend, and React and Redux to build the frontend. Bcrypt helped keep by database secure by hashing user passwords before storage. In addition to the technologies noted above, I utilized the Google Books API to get the book information and images.

## Key Features

### Playlists

Authenticated users can add playlists to books including a title, summary, image, and the playlist itself. All users can view these playlists.

![Playlist Page](https://github.com/ashley-brown13/BookTracks/blob/main/frontend/public/images/Screen%20Shot%202021-06-04%20at%202.09.43%20PM.png)

### Likes

Authenticated users can express their opinion on a playlist through the like feature.

### Books

Users can use the search functon to find books they like, and visit the book page where each playlist is located.

![Book Page](https://github.com/ashley-brown13/BookTracks/blob/main/frontend/public/images/Screen%20Shot%202021-06-04%20at%202.48.29%20PM.png)
