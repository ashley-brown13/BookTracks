import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import PlaylistsPage from "./components/PlaylistsPage"
import PlaylistPage from './components/PlaylistPage'
import AddPlaylistPage from './components/AddPlaylistPage'
import EditPlaylistPage from './components/EditPlaylistPage'
import HomePage from './components/HomePage'
import SearchResultsPage from './components/SearchResultsPage'
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/search/:searchTerm">
            <SearchResultsPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/books/:bookId/playlists/addplaylist">
            <AddPlaylistPage />
          </Route>
          <Route exact path="/books/:bookId/playlists/:playlistId/editplaylist">
            <EditPlaylistPage />
          </Route>
          <Route exact path="/books/:bookId/playlists/:playlistId">
            <PlaylistPage />
          </Route>
          <Route exact path="/books/:bookId/playlists">
            <PlaylistsPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
