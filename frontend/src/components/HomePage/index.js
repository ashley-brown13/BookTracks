import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBooks } from '../../store/books';
import { loadAllPlaylists } from '../../store/playlists';
import './HomePage.css';

const HomePage = () => {
  const dispatch = useDispatch()
  const books = useSelector(state => state.books.books);
  const playlists = useSelector(state => state.playlists.playlists)

  useEffect(() => {
    dispatch(loadBooks());
    dispatch(loadAllPlaylists())
  }, []);


  return (
    <div className="home-page">
      <div className="books-total-container">
        <h3 className="header">EXPLORE BOOKS</h3>
        <div className="books-container">
          {books && books.map((book) => (
              <div className="ind-book-container" key={book.id}>
                <div className="ind-book-image-container">
                  <a href={`/books/${book.id}/playlists`}>
                    <img src={book.imageURL} className="ind-book-image"></img>
                  </a>
                </div>
                <a href={`/books/${book.id}/playlists`} className="ind-book-title">
                  <p className="ind-book-title">{book.title}</p>
                </a>
              </div>
            ))}
        </div>
      </div>
      <div className="home-playlists-container">
          <h3 className="header-playlist">EXPLORE PLAYLISTS</h3>
          <div className="playlists-container-home">
            {playlists && playlists.map((playlist) => (
              <div className="ind-playlist-container" key={playlist.id}>
                <div className="ind-playlist-image-container">
                  <a href={`/books/${playlist.bookId}/playlists/${playlist.id}`}>
                    <img src={playlist.imageURL} className="ind-playlist-image"></img>
                  </a>
                </div>
                <a href={`/books/${playlist.bookId}/playlists/${playlist.id}`} className="ind-playlist-title">
                  <p className="ind-playlist-title">{playlist.title}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div>
        <div className="footer">
            <h3 className="contact-me">Contact Ashley:</h3>
            <div className="links">
                <a href="https://www.linkedin.com/in/ashleybrown121389/" target="_blank">LinkedIn</a>
                <a href="mailto:ashleybrown101789@gmail.com" target="_blank">Gmail</a>
                <a href="https://github.com/ashley-brown13" target="_blank">GitHub</a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default HomePage;
