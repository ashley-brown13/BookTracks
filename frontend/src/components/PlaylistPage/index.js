import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadPlaylist } from '../../store/playlists';
import { loadBook } from '../../store/books';
import BookPage from '../BookPage'
import './PlaylistPage.css';

const PlaylistPage = () => {
  const dispatch = useDispatch()
  const { playlistId } = useParams();
  const { bookId } = useParams()
  const playlist = useSelector(state => state.playlists.playlist);
  const userName = useSelector(state => state.playlists.userName);

  useEffect(() => {
    dispatch(loadPlaylist(bookId, playlistId));
  }, [playlistId]);

  return (
    <div className="playlist-total-container">
      <BookPage />
      {playlist &&
        <div className="playlist-container">
          <img src={playlist.imageURL} alt="playlist cover" className="playlist-container-image"></img>
          <p className="playlist-container-title">{playlist.title}</p>
          <p>{userName}</p>
          <p className="playlist-container-description">{playlist.description}</p>
          <iframe src={playlist.fixedLink} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
      }
    </div>
  )
}
export default PlaylistPage;
