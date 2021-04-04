import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import music from '../../images/headphones.png'

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const [search, setSearch] = useState("")
  const history = useHistory();

  const handleSearch = async (e) => {
    e.preventDefault();

    if (search) {
      history.push(`/search/${search}`);
    }
  };


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className="not-logged-nav">
          <NavLink to="/login" className="top-link">Log In</NavLink>
          <NavLink to="/signup" className="top-link">Sign Up</NavLink>
      </div>
    );
  }

  return (
    <div className='navigation-bar'>
      <div className='website-name-icon'>
        <img src={music} id="book-icon" alt="book icon"></img>
        <NavLink exact to="/" id="website-name">booktracks</NavLink>
      </div>
      <div className="search-container">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            className="search-input"
            type="text"
            placeholder="Search books"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
      <div className="not-logged-nav">
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
