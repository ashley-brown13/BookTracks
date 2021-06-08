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

Authenticated users can express their opinion on a playlist through the like feature. This feature utilizes a heart button, that when clicked, turns red and adds the users like to the database.

```js
 if(liked){
    content = (
      <button onClick={submitUnLike} className="liked-button">
        <i className="far fa-heart" ></i>
      </button>
    )
  } else if(userId) {
    content = (
      <button onClick={submitLike} className="like-button">
        <i className="far fa-heart" ></i>
      </button>
    )
  }
```

### Books

Users can use the search functon to find books they like, and visit the book page where each playlist is located.

![Book Page](https://github.com/ashley-brown13/BookTracks/blob/main/frontend/public/images/Screen%20Shot%202021-06-04%20at%202.48.29%20PM.png)

## Challenges

One of the challenges I ran into on this project was my editing playlist functionality. Originally, when I implemented it, the form would not preload the information stored in the database. I kept receiving a console error that stated there were too many re-renders. In order to fix the issue, I used conditionals in the JSX, and utilized useEffect to properly set the data in the fields once the playlist had been fetched.

```js
  useEffect(() => {
    dispatch(loadPlaylistForEdit(bookId, playlistId));
  }, []);

  useEffect(() => {
    setTitle(playlist?.title)
    setDescription(playlist?.description)
    setSpotifyLink(playlist?.spotifyLink)
    setImageURL(playlist?.imageURL)
  }, [playlist])
```

## Instructions
After cloning the repository to your local machine, follow the instructions below to start the app:

>1. In the frontend folder, run `npm install` to install all frontend dependencies for the app.
>2. In the backend folder, run `npm install` to install all backend dependencies for the app.
>3. While in the backend folder, make a .env file based on the .env.example (add values to the empty places).
>4. Create the user role (matching information above) in psql with `CREATEDB` attribute.
>5. `npx dotenv sequelize db:create`
>6. `npx dotenv sequelize db:migrate`
>7. `npx dotenv sequelize db:seed:all`
>8. In the backend folder, `npm start` to run the server.
>9. In the frontend folder, `npm start` to start the react app.
