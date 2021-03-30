import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <div className="user-dropdown">
      <button onClick={openMenu} className="user-button">
        <i className="fas fa-user" />
      </button>
      {showMenu && (
        <div className="profile-dropdown">
          <p id="dropdown-username">{user.username}</p>
          <button onClick={logout} id="logout-button">Log Out</button>
        </div>
      )}
    </div>
  );
}

export default ProfileButton;
