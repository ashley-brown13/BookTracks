const express = require('express')
const asyncHandler = require('express-async-handler');
const { Book, Playlist, User } = require('../../db/models');

const router = express.Router();

router.get('/:bookId', asyncHandler(async function(req, res) {
  const book = await Book.findByPk(req.params.bookId);
  return res.json(book);
}));

router.get('/:bookId/playlists/:playlistId', asyncHandler(async function(req, res) {
  const playlist = await Playlist.findByPk(req.params.playlistId);
  const user = await User.findByPk(playlist.userId)
  const userName = user.username
  return res.json({playlist, userName});
}));

module.exports = router;
