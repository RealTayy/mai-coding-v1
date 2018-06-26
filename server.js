/*****************|
|*  DEPENDECIES  *|
|*****************/
/* GENERAL */
// Utilities for working with file and directory paths
const path = require('path');

/* WEB FRAMEWORKS */
// lightweight web framework for node server
const express = require('express');
// Initialize express under app variable
const app = express();
const PORT = process.env.PORT || 3000;

/* BODY PARSERS */
// node.js body parsing middleware avaiable under req.body
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: false }));

/* LOGGERS */
/* morgan set to 'dev':
    RED         Server Error Codes
    YELLOW      Client Error Codes
    CYAN        Redirection Codes
    UNCOLORED   Other Codes         */
const logger = require('morgan');
app.use(logger('dev'));

/* VIEW ENGINE */
// Handlebars view engine for express
const exphbs = require('express-handlebars');

/******************|
|* INITIALIZATION *| 
|******************/
// None

/*****************|
|* SET UP MODELS *| 
|*****************/
// None

/****************|
|* SET UP VIEWS *| 
|****************/
/* SET UP PATHS */
// Set public folder
app.use(express.static('public'));

/* SET UP ENGINE */
// Import helper functions for handlebars
const hbHelpers = require('./views/helpers/hbHelpers.js');

// Sets up engine to use handlebars
app.engine('hbs', exphbs({
    // Use Helper functions
    helpers: {
        debug: hbHelpers.debug,
        ifCond: hbHelpers.ifCond
    },
    // Set Default layout
    defaultLayout: 'main',
    // Allow use of .hbs file extension name
    extname: '.hbs'
}));

/* USE VIEWS */
app.set('view engine', 'hbs');

/**********************|
|* SET UP CONTROLLERS *| 
|**********************/
/* SET UP PATHS */
const controllersDir = path.join(__dirname, 'controllers');

/* SET UP ROUTES */
const routerHtml = require(path.join(controllersDir, 'htmlRoutes.js'));

/* USE ROUTES */
app.use('/', routerHtml);

/*********************************|
|* LISTEN FOR CONNECTION ON PORT *| 
|*********************************/
app.listen(PORT, () => { console.log(`App listening on PORT: ${PORT}`) });