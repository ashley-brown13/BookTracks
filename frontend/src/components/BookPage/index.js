import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadBook } from '../../store/books';
import './BookPage.css';

const BookPage = () => {
  const dispatch = useDispatch()
  const { bookId } = useParams();
  const book = useSelector(state => state.books.book);
  const sessionUser = useSelector((state) => state.session.user);
  let userId = null;

  if(sessionUser){
    userId = sessionUser.id
  }

  useEffect(() => {
    dispatch(loadBook(bookId));
  }, [bookId]);

  return (
    <div className="book-total-container">
      {book &&
        <div className="book-container">
          <a href={`/books/${book.id}/playlists`}>
            <img src={book.imageURL} alt="book cover" className="book-container-image"></img>
          </a>
          <a href={`/books/${book.id}/playlists`} className="book-container-title">
            <p className="book-container-title">{book.title}</p>
          </a>
          <p className="book-container-author">{book.author}</p>
          <button className="book-container-more-info">
            <a href={book.googleLink} target="_blank" className="book-container-goog-link">More Info</a>
          </button>
          {userId &&
            <button className="book-container-more-info">
              <a href={`/books/${bookId}/playlists/addplaylist`} className="book-container-goog-link">Add Playlist</a>
            </button>
          }
        </div>
      }
    </div>
  )
}


export default BookPage;
