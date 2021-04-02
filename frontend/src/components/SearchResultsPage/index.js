import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { searchBooks } from '../../store/books';
import './SearchResultsPage.css';

const SearchResultsPage = () => {
  const dispatch = useDispatch()
  const books = useSelector(state => state.books.books);
  const { searchTerm } = useParams()

  useEffect(() => {
    dispatch(searchBooks(searchTerm));
  }, [searchTerm]);


  return (
    <div className="search-books-total-container">
      <h3 className="header">SEARCH RESULTS</h3>
      <div className="search-books-container">
        {books && books.map((book) => (
            <div className="ind-search-book-container" key={book.id}>
              <div className="ind-search-book-image-container">
                <a href={`/books/${book.id}/playlists`}>
                  <img src={book.imageURL} className="ind-search-book-image"></img>
                </a>
              </div>
              <div className="ind-search-book-details">
                <a href={`/books/${book.id}/playlists`} className="ind-search-book-title">
                  <p className="ind-search-book-title">{book.title}</p>
                </a>
                  <p className="ind-search-book-author">{book.author}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default SearchResultsPage;
