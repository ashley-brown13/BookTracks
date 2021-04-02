const express = require('express')
const asyncHandler = require('express-async-handler');
const { Book, Playlist, User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();

const validatePlaylist = [
  check('title')
    .exists({ checkFalsy: true })
    .isLength({ min: 3 })
    .withMessage('Please provide a title with at least 3 characters.'),
  check('description')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a description.'),
  check('spotifyLink')
    .exists({ checkFalsy: true })
    .isLength({ min: 81 })
    .withMessage('Please provide a spotifyLink with at least 3 characters.'),
  check('spotifyLink')
    .exists({ checkFalsy: true })
    .isLength({ min: 3 })
    .withMessage('Please provide an imageURL with at least 3 characters.'),
  handleValidationErrors,
];


router.get('/:bookId', asyncHandler(async function(req, res) {
  const book = await Book.findByPk(req.params.bookId);
  return res.json(book);
}));

router.get('/:bookId/playlists', asyncHandler(async function(req, res) {
  const bookId = req.params.bookId;
  const playlists = await Playlist.findAll({where: {bookId}})
  return res.json(playlists);
}));

router.post('/:bookId/playlists/addplaylist', asyncHandler(async function(req, res) {
  const { title, description, spotifyLink, imageURL, userId } = req.body;
  const bookId = req.params.bookId;
  const playlist = await Playlist.create({ title, description, spotifyLink, imageURL, userId, bookId });
  return res.json(playlist);
}));

router.get('/:bookId/playlists/:playlistId', asyncHandler(async function(req, res) {
  const playlist = await Playlist.findByPk(req.params.playlistId);
  const user = await User.findByPk(playlist.userId)
  const userName = user.username
  return res.json({playlist, userName});
}));

router.delete('/:bookId/playlists/:playlistId/delete', asyncHandler(async function(req, res) {
  const { playlistId } = req.body
  const playlist = await Playlist.findByPk(playlistId);
  await playlist.destroy()
  return res.json(playlist);
}));

router.get('/:bookId/playlists/:playlistId/editplaylist', asyncHandler(async function(req, res) {
  const playlist = await Playlist.findByPk(req.params.playlistId);
  return res.json(playlist);
}));

router.put('/:bookId/playlists/:playlistId/editplaylist', asyncHandler(async function(req, res) {
  await Playlist.update(req.body, {where: {id: req.params.playlistId }});
  const playlist = await Playlist.findByPk(req.params.playlistId);
  return res.json(playlist);
}));



module.exports = router;
