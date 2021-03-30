const LOAD_ONE = 'books/loadOne';

const loadOne = (book) => {
  return {
    type: LOAD_ONE,
    book: book,
  };
};

export const loadBook = (id) => async dispatch => {
  const response = await fetch(`/api/books/${id}`);
  if(response.ok) {
    const book = await response.json();
    dispatch(loadOne(book))
  }
}

const initialState = { book: null }

const booksReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_ONE:
      newState = Object.assign({}, state);
      newState.book = action.book
      return newState
    default:
      return state;
  }
}

export default booksReducer
