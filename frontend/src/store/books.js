const LOAD_ONE = 'books/LOAD_ONE';
const LOAD_ALL = 'books/LOAD_ALL';

const loadOne = (book) => {
  return {
    type: LOAD_ONE,
    book: book,
  };
};

const loadAll = (books) => {
  return {
    type: LOAD_ALL,
    books: books
  }
}

export const loadBooks = () => async dispatch => {
  const response = await fetch(`/api/`);
  if(response.ok) {
    const books = await response.json();
    dispatch(loadAll(books))
  }
}

export const loadBook = (id) => async dispatch => {
  const response = await fetch(`/api/books/${id}`);
  if(response.ok) {
    const book = await response.json();
    dispatch(loadOne(book))
  }
}

export const searchBooks = (searchTerm) => async dispatch => {
  const response = await fetch(`/api/search/${searchTerm}`);
  if(response.ok) {
    const books = await response.json();
    dispatch(loadAll(books))
    return books
  }
}

const initialState = { book: null, books: null }

const booksReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_ONE:
      newState = Object.assign({}, state);
      newState.book = action.book
      return newState
    case LOAD_ALL:
      newState = Object.assign({}, state);
      newState.books = action.books
      return newState
    default:
      return state;
  }
}

export default booksReducer
