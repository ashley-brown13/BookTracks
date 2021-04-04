const express = require('express')
const asyncHandler = require('express-async-handler');
const { Book, Like, Playlist } = require('../../db/models');
const { Op } = require("sequelize");


const router = express.Router();

router.get('', asyncHandler(async function(req, res) {
  const books = await Book.findAll({ limit: 12 });
  return res.json(books);
}));

router.get('/search/:searchTerm', asyncHandler(async function(req, res) {
  const books = await Book.findAll({
    where: {
        title: {[Op.iLike]: `%${req.params.searchTerm}%`}
    },
});
  return res.json(books);
}));

router.get('/playlists', asyncHandler(async function(req, res) {
  const playlists = await Playlist.findAll({limit: 12})
  return res.json(playlists);
}));

router.get('/:playlistId/likes', asyncHandler(async function(req, res) {
  let playlistId = req.params.playlistId
  const likes = await Like.findAll({where: {playlistId}});
  return res.json(likes);
}));

module.exports = router;
