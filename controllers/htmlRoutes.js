/***************|
|* DEPENDECIES *|
|***************/
/* GENERAL */
// Utilities for working with file and directory paths
import path from 'path';

/* WEB FRAMEWORKS */
// lightweight web framework for node server
import express from 'express';
// create instance of express router
const router = express.Router();

/* VIEW ENGINE */
// Handlebars view engine for express
import exphbs from 'express-handlebars';

/* OTHER */
// Handlebar view data
import projects from '../data/projects.js'
import websites from '../data/websites.js'
import intro from '../data/intro.js'
// Utils
import yearLetters from '../utils/yearLetters.js'



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
export default router;
