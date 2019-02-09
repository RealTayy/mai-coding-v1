/***************|
|* DEPENDECIES *| 
|***************/
/* GENERAL */
// Utilities for working with file and directory paths
const path = require('path');
// Load enviroment variables from .env into process.env
const envDir = path.join(__dirname, '../', '.env');
require('dotenv').config({ path: envDir });

/* WEB FRAMEWORKS */
// lightweight web framework for node server
const express = require('express');
// create instance of express router
const router = express.Router();

/* EMAIL SENDER */
// Sends email from GMAIL with Node.js
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	service: 'Gmail',
	auth: {
		type: 'OAuth2',
		user: process.env.USER,
		clientId: process.env.CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
		refreshToken: process.env.OAUTH_REFRESH_TOKEN,
	},
	tls: {
		rejectUnauthorized: false
	},
	secure: true,
});

/******************|
|* INITIALIZATION *| 
|******************/

/*****************|
|* SET UP ROUTER *| 
|*****************/
/* SET ROUTES */
router.get('/email', (req, res) => {
});

router.post('/email', (req, res) => {
	let mailData = req.body;
	var mail = {
		from: mailData.email,
		to: process.env.USER,
		subject: `${mailData.name} | ${mailData.email}`,
		text: `${mailData.name} | ${mailData.email} | ${mailData.message}`,
		html: `
        <div>
					<h2 style="margin: 0px">${mailData.name}</h2>
					<h3 style="margin: 0px">${mailData.email}</h3>
					<p>${mailData.message}</p>
        </div>`
	}
	// Sends mail using nodeMailer
	transporter.sendMail(mail, (err, info) => {
	    if (err) {
	        console.log(err);
	        res.send({ status: 404, error: err, info:info });
	    }
	    else {
	        res.send({ status: 200, error: err, info:info });
	    }
	    transporter.close();
	});
});

/***********|
|* EXPORTS *| 
|***********/
// Export instance of express router
module.exports = router;