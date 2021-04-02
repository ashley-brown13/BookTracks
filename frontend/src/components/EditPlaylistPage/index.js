import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { updatePlaylist } from '../../store/playlists';
import { loadPlaylistForEdit } from '../../store/playlists';
import BookPage from '../BookPage'
import './EditPlaylistPage.css';

const EditPlaylistPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { playlistId } = useParams()
  const sessionUser = useSelector((state) => state.session.user);
  const playlist = useSelector(state => state.playlists.playlist);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [spotifyLink, setSpotifyLink] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [errors, setErrors] = useState([]);
  const { bookId } = useParams();
  const userId = sessionUser.id;
  const playlistTest = useSelector(state => state.playlists[playlistId])
  console.log(playlistTest)


  useEffect(() => {
    dispatch(loadPlaylistForEdit(bookId, playlistId));
  }, []);

  // if(playlist){
  //   setTitle(playlist.title)
  //   setDescription(playlist.description)
  //   setSpotifyLink(playlist.spotifyLink)
  //   setImageURL(playlist.imageURL)
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const payload = {
      id: playlistId,
      title,
      description,
      spotifyLink,
      imageURL,
      bookId,
      userId
    };

    let editedPlaylist = await dispatch(updatePlaylist(bookId, payload));

    if (editedPlaylist) {
      history.push(`/books/${bookId}/playlists/${playlistId}`);
    }
  };

  return (
    <div className="edit-playlist-container">
      <BookPage />
      {playlist &&
      <div className="edit-playlist-page">
        <h4>Edit Playlist</h4>
        <form onSubmit={handleSubmit} className="edit-playlist-form">
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <div className="edit-playlist-input-label-field">
            <label>
              Title
              <input
                className="edit-playlist-input"
                type="text"
                placeholder={playlist.title}
                value={title}
                onChange={(e) => setTitle(e.target.value)}

              />
            </label>
          </div>
          <div className="edit-playlist-input-label-field">
            <label>
                Description
                <textarea
                  id="edit-playlist-description-box"
                  className="edit-playlist-input"
                  placeholder={playlist.description}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
            </label>
          </div>
          <div className="edit-playlist-input-label-field">
            <label>
                Spotify Link
                <input
                  className="edit-playlist-input"
                  type="text"
                  placeholder={playlist.spotifyLink}
                  value={spotifyLink}
                  onChange={(e) => setSpotifyLink(e.target.value)}

                />
            </label>
          </div>
          <div className="edit-playlist-input-label-field">
            <label>
                ImageURL
                <input
                  className="edit-playlist-input"
                  type="text"
                  placeholder={playlist.imageURL}
                  value={imageURL}
                  onChange={(e) => setImageURL(e.target.value)}
                />
            </label>
          </div>
          <button type="submit" className="edit-playlist-submit">Edit Playlist</button>
        </form>
      </div>}
    </div>
  );
}

export default EditPlaylistPage;
