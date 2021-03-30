import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import music from '../../images/headphones.png'

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className="new-user-nav">
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
      </div>
    );
  }

  return (
    <div className='navigation-bar'>
      <div>
        <img src={music} id="book-icon"></img>
        <NavLink exact to="/" id="website-name">booktracks</NavLink>
      </div>
        {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
