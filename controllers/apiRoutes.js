/***************|
|* DEPENDECIES *|
|***************/
/* GENERAL */
// Load enviroment variables from .env into process.env
import dotenv from 'dotenv'
dotenv.config();

/* WEB FRAMEWORKS */
// lightweight web framework for node server
import express from 'express'
// create instance of express router
const router = express.Router();

/* EMAIL SENDER */
// Sends email from GMAIL with Node.js
import nodemailer from 'nodemailer'
import googleapis from 'googleapis';
const { google } = googleapis;
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
	process.env.CLIENT_ID, // ClientID
	process.env.CLIENT_SECRET, // Client Secret
	"https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
	refresh_token: process.env.OAUTH_REFRESH_TOKEN
});

const accessToken = oauth2Client
	.refreshAccessToken()
	.then(tokens => tokens.credentials)
	.then(credentials => credentials.access_token);

const transporter = nodemailer.createTransport({
	// host: 'smtp.gmail.com',
	service: 'gmail',
	auth: {
		type: 'OAuth2',
		user: process.env.USER,
		clientId: process.env.CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
		refreshToken: process.env.OAUTH_REFRESH_TOKEN,
		accessToken: accessToken
	},
	// tls: {
	// 	rejectUnauthorized: false
	// },
	// secure: true,
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
		to: "themai@maicoding.me",
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
			res.send({ status: 404, error: err, info: info });
		}
		else {
			res.send({ status: 200, error: err, info: info });
		}
		transporter.close();
	});
});

/***********|
|* EXPORTS *|
|***********/
// Export instance of express router
export default router;
