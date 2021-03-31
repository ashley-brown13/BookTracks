import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadBook } from '../../store/books';
import './BookPage.css';

const BookPage = () => {
  const dispatch = useDispatch()
  const { bookId } = useParams();
  const book = useSelector(state => state.books.book);

  useEffect(() => {
    dispatch(loadBook(bookId));
  }, [bookId]);

  return (
    <div className="book-total-container">
      {book &&
        <div className="book-container">
          <img src={book.imageURL} alt="book cover" className="book-container-image"></img>
          <p className="book-container-title">{book.title}</p>
          <p className="book-container-author">{book.author}</p>
          <button className="book-container-more-info">
            <a href={book.googleLink} target="_blank" className="book-container-goog-link">More Info</a>
          </button>
        </div>
      }
    </div>
  )
}


export default BookPage;
