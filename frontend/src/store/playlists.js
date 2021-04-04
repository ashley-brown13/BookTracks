import { csrfFetch } from './csrf';

const LOAD_ONE = 'playlists/LOAD_ONE';
const LOAD_ALL = 'playlists/LOAD_ALL';
const ADD_ONE = 'playlists/ADD_ONE'
const REMOVE_PLAYLIST = "playlists/REMOVE_PLAYLIST";

const loadOne = (playlist, userName = null) => {
  return {
    type: LOAD_ONE,
    playlist: playlist,
    userName: userName,
  };
};

const loadAll = (playlists) => {
  return {
    type: LOAD_ALL,
    playlists: playlists,
  }
}

const addPlaylist = (playlist) => ({
  type: ADD_ONE,
  playlist: playlist,
});

const removePlaylist = (playlistId) => ({
  type: REMOVE_PLAYLIST,
  playlistId: playlistId
});

export const loadPlaylist = (bookId, playlistId) => async dispatch => {
  const response = await fetch(`/api/books/${bookId}/playlists/${playlistId}`);
  if(response.ok) {
    const wholeObject = await response.json();
    const {playlist, userName} = wholeObject
    dispatch(loadOne(playlist, userName))
  }
}

export const loadPlaylistForEdit = (bookId, playlistId) => async dispatch => {
  const response = await fetch(`/api/books/${bookId}/playlists/${playlistId}/editplaylist`);
  if(response.ok) {
    const playlist = await response.json();
    dispatch(loadOne(playlist))
  }
}

export const loadPlaylists = (bookId) => async dispatch => {
  const response = await fetch(`/api/books/${bookId}/playlists`);
  if(response.ok) {
    const playlists = await response.json();
    dispatch(loadAll(playlists))
  }
}

export const loadAllPlaylists = () => async dispatch => {
  const response = await fetch(`/api/playlists`);
  if(response.ok) {
    const playlists = await response.json();
    dispatch(loadAll(playlists))
  }
}

export const createPlaylist = (bookId, payload) => async dispatch => {
  const response = await csrfFetch(`/api/books/${bookId}/playlists/addplaylist`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw response;
  const playlist = await response.json();
  dispatch(addPlaylist(playlist));
  return playlist;
}

export const updatePlaylist = (bookId, payload) => async dispatch => {
  console.log(payload.id)
  const response = await csrfFetch(`/api/books/${bookId}/playlists/${payload.id}/editplaylist`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw response;
  const playlist = await response.json();
  console.log(playlist)
  dispatch(addPlaylist(playlist));
  return playlist;
}

export const deletePlaylist = (bookId, playlistId) => async dispatch => {
  const response = await csrfFetch(`/api/books/${bookId}/playlists/${playlistId}/delete`, {
    method: 'DELETE',
  });
  if (response.ok) {
    const playlist = await response.json();
    dispatch(removePlaylist(playlistId));
    return playlist
  }
};

function generate(spotifyLink){
  let copy = ""
  let first = spotifyLink.slice(0, 25)
  let second = "embed/"
  let third = spotifyLink.slice(25, 56)
  return copy + first + second + third
}

const initialState = { playlist: null, playlists: null }

const playlistsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_ONE:
      let fixedLink = generate(action.playlist.spotifyLink)
      newState = Object.assign({}, state);
      newState.playlist = action.playlist;
      newState.userName = action.userName;
      newState.playlist.fixedLink = fixedLink;
      return newState
    case LOAD_ALL:
      newState = Object.assign({}, state);
      newState.playlists = action.playlists;
      return newState
    case ADD_ONE:
      if (!state[action.playlist.id]) {
        newState = {
          ...state,
          [action.playlist.id]: action.playlist
        };
        return newState
      }
      return {
        ...state,
        [action.playlist.id]: {
          ...state[action.playlist.id],
          ...action.playlist,
        }
      };
    case REMOVE_PLAYLIST: {
      const newState = { ...state };
      delete newState[action.playlistId];
      return newState;
    }
    default:
      return state;
  }
}

export default playlistsReducer
