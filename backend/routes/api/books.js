const express = require('express')
const asyncHandler = require('express-async-handler');
const { Book } = require('../../db/models');

const router = express.Router();

router.get('/:bookId', asyncHandler(async function(req, res) {
  console.log(req.params.bookId)
  const book = await Book.findByPk(req.params.bookId);
  return res.json(book);
}));

module.exports = router;
