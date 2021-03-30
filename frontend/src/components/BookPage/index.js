import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadBook } from '../../store/books';

const BookPage = () => {
  const dispatch = useDispatch()
  const { bookId } = useParams();
  const book = useSelector(state => state.books.book);

  useEffect(() => {
    dispatch(loadBook(bookId));
  }, [bookId]);

  return (
    <div>
      {book &&
        <h2>{book.title}</h2>
      }
    </div>
  )
}


export default BookPage;
