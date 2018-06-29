const node = './assets/images/techlogos/node.png';
const react = './assets/images/techlogos/react.png';
const mongodb = './assets/images/techlogos/mongodb.png';
const mongoose = './assets/images/techlogos/mongoose.png';
const heroku = './assets/images/techlogos/heroku.png';
const mysql = './assets/images/techlogos/mysql.png';
const jquery = './assets/images/techlogos/jquery.png';
const materialize = './assets/images/techlogos/materialize.png';
const firebase = './assets/images/techlogos/firebase.png';
const sequelize = './assets/images/techlogos/sequelize.png';
const knockout = './assets/images/techlogos/knockout.png';
const bootstrap = './assets/images/techlogos/bootstrap.png';
const handlebars = './assets/images/techlogos/handlebars.png';
const projects = [
	{
		direction: 'left',
		color: 'white',
		title: 'MemberDat | Jungdo',
		subtitle: 'Hello, this is some text that quickly explains what this app does in a few words.',
		text: 'WOW! This is some really well-written text about what technologies this app incorporates and how it is used! It makes me looks REALLY REALLY impressive because I use very greasy and slick words. NICE JOB ME!',
		media: 'http://via.placeholder.com/600x400',
		github: 'https://github.com/thaiscmky/phonow',		
		applink: 'https://phosho-phonow-production.herokuapp.com/',
		customerlink: 'https://phosho-phonow-production.herokuapp.com/',
		technologies: [node, react, materialize, mongodb, mongoose, heroku],
	},
	{
		direction: 'right', 
		color: 'grey',
		title: 'Pho Now | CMS',
		subtitle: 'A trendy restaurant website on the customer face side with a back-end administrative side that acts as a Content Management System for the restaurant owner.',
		text: 'Pho Now uses Bootstrap4, HandleBars, and jQuery to deliver information to visitors. The site pulls dynamic data from a MySQL DB using Sequelize as an ORM. Using the CMS\'s UI the owner can make live changes to the customer facing front-end. A Node.js server is hosted on Heroku along with a JawsDB.',
		media: 'http://via.placeholder.com/600x400',
		github: 'https://github.com/thaiscmky/phonow',		
		applink: 'https://phosho-phonow-production.herokuapp.com/admin',
		customerlink: 'https://phosho-phonow-production.herokuapp.com/',
		technologies: [node, bootstrap, handlebars, jquery, mysql, sequelize, heroku],
	},
	{
		direction: 'left',
		color: 'black',
		title: 'Let\'s Eat',
		subtitle: 'A meet-up app for people who don\'t want to eat alone and would like to make friends by eating with people with similiar taste buds in the area',
		text: 'Let\'s Eat uses Bootstrap4 as a base for styling. A combination of Knockout.js and jQuery is used for page manipulation. The app is integrated with Google Maps API for location lookup and uses Yelp API to find restaurants nearby. The app is deployed on GitHub and uses Firebase for database updates',
		media: 'http://via.placeholder.com/600x400',
		github: 'https://github.com/thaiscmky/letseat',		
		applink: 'https://thaiscmky.github.io/letseat/',
		technologies: [node, bootstrap, knockout, jquery, firebase, heroku],
	},
]

module.exports = projects;