import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBooks } from '../../store/books';
import './HomePage.css';

const HomePage = () => {
  const dispatch = useDispatch()
  const books = useSelector(state => state.books.books);

  useEffect(() => {
    dispatch(loadBooks());
  }, []);


  return (
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
  )
}

export default HomePage;
