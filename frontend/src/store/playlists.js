const LOAD_ONE = 'playlists/loadOne';

const loadOne = (playlist, userName) => {
  return {
    type: LOAD_ONE,
    playlist: playlist,
    userName: userName,
  };
};

export const loadPlaylist = (bookId, playlistId) => async dispatch => {
  const response = await fetch(`/api/books/${bookId}/playlists/${playlistId}`);
  if(response.ok) {
    const wholeObject = await response.json();
    const {playlist, userName} = wholeObject
    dispatch(loadOne(playlist, userName))
  }
}

function generate(spotifyLink){
  let copy = ""
  let first = spotifyLink.slice(0, 25)
  let second = "embed/"
  let third = spotifyLink.slice(25, 56)
  return copy + first + second + third
}

const initialState = { playlist: null }

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
    default:
      return state;
  }
}

export default playlistsReducer
