const LOAD_ONE = 'playlists/loadOne';

const loadOne = (playlist) => {
  return {
    type: LOAD_ONE,
    playlist: playlist,
  };
};

export const loadPlaylist = (id) => async dispatch => {
  const response = await fetch(`/api/playlists/${id}`);
  if(response.ok) {
    const playlist = await response.json();

    dispatch(loadOne(playlist))
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
      newState.playlist = action.playlist
      newState.playlist.fixedLink = fixedLink;
      return newState
    default:
      return state;
  }
}

export default playlistsReducer
