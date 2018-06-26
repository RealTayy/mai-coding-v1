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
/* SET ROUTES */
router.get('/', (req, res) => {
    res.render('./main/index.hbs', { text: 'Hello Tay!' });
});

/***********|
|* EXPORTS *| 
|***********/
// Export instance of express router
module.exports = router;