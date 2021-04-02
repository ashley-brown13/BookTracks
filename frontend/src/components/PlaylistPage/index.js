import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadPlaylist } from '../../store/playlists';
import BookPage from '../BookPage'
import './PlaylistPage.css';

const PlaylistPage = () => {
  const dispatch = useDispatch()
  const { playlistId } = useParams();
  const { bookId } = useParams()
  const playlist = useSelector(state => state.playlists.playlist);
  const userName = useSelector(state => state.playlists.userName);
  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser.id;

  useEffect(() => {
    dispatch(loadPlaylist(bookId, playlistId));
  }, [playlistId]);

  let content = null;

  if(playlist){
    if(playlist.userId === userId){
      content = (
        <div className="user-playlist-buttons">
          <a href={`/books/${bookId}/playlists/${playlistId}/editplaylist`}>
            <button className="edit-playlist-button">Edit Playlist</button>
          </a>
          <form className="playlist-delete-form">
            <button type="submit" className="delete-playlist-button">Delete Playlist</button>
          </form>
        </div>
      )
    }
  }



  return (
    <div className="playlist-total-container">
      <BookPage />
      {playlist &&
        <div className="playlist-container">
          <div className="image-and-buttons">
            <div className="playlist-image-container">
              <img src={playlist.imageURL} alt="playlist cover" className="playlist-container-image"></img>
            </div>
            {content}
          </div>
          <div className="playlist-details">
            <p className="playlist-container-title">{playlist.title}</p>
            <div className="playlist-container-username-container">
              <p className="playlist-container-username-by">by</p>
              <p className="playlist-container-username-name">{userName}</p>
            </div>
            <p className="playlist-container-description">{playlist.description}</p>
            <iframe src={playlist.fixedLink} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
        </div>
      }
    </div>
  )
}
export default PlaylistPage;
