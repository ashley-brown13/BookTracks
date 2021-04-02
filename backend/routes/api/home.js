const express = require('express')
const asyncHandler = require('express-async-handler');
const { Book } = require('../../db/models');
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

module.exports = router;
