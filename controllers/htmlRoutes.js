/***************|
|* DEPENDECIES *|
|***************/
/* GENERAL */
// Utilities for working with file and directory paths
const path = require('path');

/* WEB FRAMEWORKS */
// lightweight web framework for node server
const express = require('express');
// create instance of express router
const router = express.Router();

/* VIEW ENGINE */
// Handlebars view engine for express
const exphbs = require('express-handlebars');

/* OTHER */
// Handlebar view data
const projects = require('../data/projects.js');
const websites = require('../data/websites.js');
const intro = require('../data/intro.js');
// Utils
const yearLetters = require('../utils/yearLetters.js');



/*****************|
|* SET UP ROUTER *|
|*****************/
/* SET ROUTES */
router.get('/', (req, res) => {

    res.render('./main/index.hbs', {
        projects: projects,
        websites: websites,
        intro: intro,
        date: { full: yearLetters() }
    });

});

/***********|
|* EXPORTS *|
|***********/
// Export instance of express router
module.exports = router;
