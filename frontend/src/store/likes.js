import { csrfFetch } from './csrf';

const LOAD_LIKES = 'likes/LOAD_LIKES';

const loadAll = (likes) => {
  return {
    type: LOAD_LIKES,
    likes: likes
  }
}

export const loadLikes = (playlistId) => async dispatch => {
  const response = await fetch(`/api/${playlistId}/likes`);
  if(response.ok) {
    const likes = await response.json()
    dispatch(loadAll(likes))
  }
}

export const addUserLike = (bookId, userId, playlistId) => async dispatch => {
  const response = await csrfFetch(`/api/books/${bookId}/playlists/${playlistId}/${userId}`, {
    method: "POST"
  });
  if(response.ok) {
    const likes = await response.json()
    dispatch(loadAll(likes))
  }
}

export const removeUserLike = (bookId, userId, playlistId) => async dispatch => {
  const response = await csrfFetch(`/api/books/${bookId}/playlists/${playlistId}/${userId}`, {
    method: 'DELETE'
  });
  if(response.ok) {
    const likes = await response.json()
    dispatch(loadAll(likes))
  }
}


const initialState = { likes: null }

const likesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_LIKES:
      newState = Object.assign({}, state);
      newState.likes = action.likes;
      return newState
    default:
      return state;
  }
}

export default likesReducer
