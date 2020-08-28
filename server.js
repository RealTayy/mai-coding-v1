/*****************|
|*  DEPENDECIES  *|
|*****************/
/* WEB FRAMEWORKS */
// lightweight web framework for node server
import express from 'express';
import enforce from 'express-sslify';

// Initialize express under app variable
const app = express();
const PORT = process.env.PORT || 3000;

console.log('process.env.NODE_ENV', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
    app.use(enforce.HTTPS());
};

/* BODY PARSERS */
// node.js body parsing middleware avaiable under req.body
import bodyParser from 'body-parser';
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: false }));


/* LOGGERS */
/* morgan set to 'dev':
    RED         Server Error Codes
    YELLOW      Client Error Codes
    CYAN        Redirection Codes
    UNCOLORED   Other Codes         */
import logger from 'morgan';
app.use(logger('dev'));

/* VIEW ENGINE */
// Handlebars view engine for express
import exphbs from 'express-handlebars';

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
// Set public folder
app.use(express.static('./public'));

/* SET UP ENGINE */
// Import helper functions for handlebars
import hbHelpers from './views/helpers/hbHelpers.js'

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
/* SET UP ROUTES */
import routerHtml from './controllers/htmlRoutes.js';
import routerApi from './controllers/apiRoutes.js';

/* USE ROUTES */
app.use('/', routerHtml);
app.use('/api', routerApi);

/*********************************|
|* LISTEN FOR CONNECTION ON PORT *|
|*********************************/
app.listen(PORT, () => { console.log(`App listening on PORT: ${PORT}`) });
