const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const booksRouter = require('./books.js');
// const playlistsRouter = require('./playlists.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/books', booksRouter);

// router.use('/playlists', playlistsRouter)

module.exports = router;
