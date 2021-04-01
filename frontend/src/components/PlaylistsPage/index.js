import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadPlaylists } from '../../store/playlists';
import BookPage from '../BookPage'
import './PlaylistsPage.css';

const PlaylistsPage = () => {
  const dispatch = useDispatch()
  const { bookId } = useParams()
  const playlists = useSelector(state => state.playlists.playlists);

  useEffect(() => {
    dispatch(loadPlaylists(bookId));
  }, [bookId]);

  return (
    <div className="playlists-total-container">
      <BookPage />
      <div className="playlists-container">
        {playlists && playlists.map((playlist) => (
            <div className="ind-playlist-container">
              <div className="ind-playlist-image-container">
                <a href={`/books/${bookId}/playlists/${playlist.id}`}>
                  <img src={playlist.imageURL} className="ind-playlist-image"></img>
                </a>
              </div>
                <p className="ind-playlist-title">{playlist.title}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default PlaylistsPage;
