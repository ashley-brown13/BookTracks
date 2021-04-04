import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { createPlaylist } from '../../store/playlists';
import BookPage from '../BookPage'
import './AddPlaylistPage.css';

const AddPlaylistPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [spotifyLink, setSpotifyLink] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [errors, setErrors] = useState([]);
  const { bookId } = useParams();
  const userId = sessionUser.id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const payload = {
      title,
      description,
      spotifyLink,
      imageURL,
      bookId,
      userId
    };

    let createdPlaylist = await dispatch(createPlaylist(bookId, payload));

    if (createdPlaylist) {
      history.push(`/books/${bookId}/playlists/${createdPlaylist.id}`);
    }
  };



  return (
    <div className="add-playlist-container">
      <BookPage />
      <div className="add-playlist-page">
        <h4>Add Playlist</h4>
        <form onSubmit={handleSubmit} className="add-playlist-form">
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <div className="add-playlist-input-label-field">
            <label>
              Title
              <input
                className="add-playlist-input"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="add-playlist-input-label-field">
            <label>
                Description
                <textarea
                  id="add-playlist-description-box"
                  className="add-playlist-input"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
            </label>
          </div>
          <div className="add-playlist-input-label-field">
            <label>
                Spotify Link
                <input
                  className="add-playlist-input"
                  type="text"
                  value={spotifyLink}
                  onChange={(e) => setSpotifyLink(e.target.value)}
                  required
                />
            </label>
          </div>
          <div className="add-playlist-input-label-field">
            <label>
                ImageURL
                <input
                  className="add-playlist-input"
                  type="text"
                  value={imageURL}
                  onChange={(e) => setImageURL(e.target.value)}
                  required
                />
            </label>
          </div>
          <button type="submit" className="add-playlist-submit">Add Playlist</button>
        </form>
      </div>
    </div>
  );
}

export default AddPlaylistPage;
