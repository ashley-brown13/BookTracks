import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loadLikes, addUserLike, removeUserLike } from '../../store/likes';


const LikeButton = ({userId, bookId, playlistId}) => {
  const dispatch = useDispatch()
  const likes = useSelector(state => state.likes.likes);
  let length;

  useEffect(() => {
    dispatch(loadLikes(bookId, playlistId))
  }, [bookId, playlistId])


  if(!likes){
    length = 0
  }

  if(likes) {
    length = likes.length
  }

  const submitLike = async () => {
    await dispatch(addUserLike(bookId, userId, playlistId))
    dispatch(loadLikes(bookId, playlistId))
  }

  const submitUnLike = async () => {
    await dispatch(removeUserLike(bookId, userId, playlistId))
    dispatch(loadLikes(bookId, playlistId))

  }

  let content;
  let liked;

  if(likes){
    liked = likes.find(like => like.userId === userId)
  }


  if(liked){
    content = (
      <button onClick={submitUnLike} className="liked-button">
        <i className="far fa-heart" ></i>
      </button>
    )
  } else {
    content = (
      <button onClick={submitLike} className="like-button">
        <i className="far fa-heart" ></i>
      </button>
    )
  }

  return (
    <div className="likes-container">
        {content}
        <p className="likes-count">Likes: {length}</p>
    </div>
  );
}

export default LikeButton;
