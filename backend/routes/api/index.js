const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const booksRouter = require('./books.js');
const homeRouter = require('./home.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/books', booksRouter);

router.use(homeRouter)

// router.use('/playlists', playlistsRouter)

module.exports = router;
