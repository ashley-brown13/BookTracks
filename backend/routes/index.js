const express = require('express');
const router = express.Router();
const csurf = require('csurf');
const csrf = require('csurf');
const apiRouter = require('./api');
const csrfProtection = csrf({ cookie: true });
router.use('/api', apiRouter);





module.exports = router;
