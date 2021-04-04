import { csrfFetch } from './csrf';

const LOAD_LIKES = 'likes/LOAD_LIKES';
const ADD_LIKE = 'likes/ADD_LIKE';
const REMOVE_LIKE = 'likes/REMOVE_LIKE';

const loadAll = (likes) => {
  return {
    type: LOAD_LIKES,
    likes: likes
  }
}

const addLike = (userId, playlistId) => {
  return {
    type: ADD_LIKE,
    userId: userId,
    playlistId: playlistId
  }
}

const removeLike = (userId, playlistId) => {
  return {
    type: REMOVE_LIKE,
    userId: userId,
    playlistId: playlistId
  }
}

export const loadLikes = (bookId, playlistId) => async dispatch => {
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
    dispatch(addLike(userId, playlistId))
  }
}

export const removeUserLike = (bookId, userId, playlistId) => async dispatch => {
  const response = await csrfFetch(`/api/books/${bookId}/playlists/${playlistId}/${userId}`, {
    method: 'DELETE'
  });
  if(response.ok) {
    const likes = await response.json()
    dispatch(removeLike(userId, playlistId))
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
    case ADD_LIKE:
      if (!state[action.userId]) {
        newState = {
          ...state,
          [action.userId]: action.userId,
          [action.playlistId]: action.playlistId
        };
        return newState
      }
    case REMOVE_LIKE:
      newState = { ...state };
      delete newState[action.userId];
      delete newState[action.playlist]
      return newState
    default:
      return state;
  }
}

export default likesReducer
