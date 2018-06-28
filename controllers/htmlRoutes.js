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
var exphbs = require('express-handlebars');

/*****************|
|* SET UP ROUTER *| 
|*****************/
console.log(__dirname);
/* SET ROUTES */
router.get('/', (req, res) => {
    const projects = require('../data/projects.js');
    res.render('./main/index.hbs', { projects: projects });
});

/***********|
|* EXPORTS *| 
|***********/
// Export instance of express router
module.exports = router;