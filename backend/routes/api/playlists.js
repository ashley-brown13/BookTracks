const express = require('express')
const asyncHandler = require('express-async-handler');
const { Playlist } = require('../../db/models');

const router = express.Router();

router.get('/:playlistId', asyncHandler(async function(req, res) {
  console.log(req.params.playlistId)
  const playlist = await Playlist.findByPk(req.params.playlistId);
  return res.json(playlist);
}));

module.exports = router;
