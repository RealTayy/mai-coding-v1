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

/* Sass auto complier*/
// Natively compile .scss files to css via a connect middleware
const sassMiddleware = require('node-sass-middleware');
const sassDir = path.join(__dirname, 'public', 'assets', 'sass');
const cssDir = path.join(__dirname, 'public', 'assets', 'css');
// app.use(
//     sassMiddleware ({
//         src: sassDir,
//         dest: cssDir,
//         debug: true,
//         indentedSyntax: true,
//         outputStyle: 'compressed',
//         prefix: '/assets/css'
//     })
// );

app.use(    
    sassMiddleware({
        src: __dirname + '/sass',
        dest: __dirname + '/public/stylesheets',
        prefix: '/stylesheets',
        debug: true,
    })
);

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
const publicDir = (path.join(__dirname, 'public'));
// Set public folder
app.use(express.static(publicDir));

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
const routerApi = require(path.join(controllersDir, 'apiRoutes.js'));

/* USE ROUTES */
app.use('/', routerHtml);
app.use('/api', routerApi);

/*********************************|
|* LISTEN FOR CONNECTION ON PORT *| 
|*********************************/
app.listen(PORT, () => { console.log(`App listening on PORT: ${PORT}`) });
console.log('srcPath is ' + sassDir);
console.log('destPath is ' + cssDir);