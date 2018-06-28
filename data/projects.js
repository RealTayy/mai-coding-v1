const react = 'http://via.placeholder.com/100x50';
const node = 'http://via.placeholder.com/125x50';
const projects = [
	{
		direction: 'left',
		color: 'white',
		title: 'MemberDat | Jungdo',
		subtitle: 'Hello, this is some text that quickly explains what this app does in a few words.',
		text: 'WOW! This is some really well-written text about what technologies this app incorporates and how it is used! It makes me looks REALLY REALLY impressive because I use very greasy and slick words. NICE JOB ME!',
		media: 'http://via.placeholder.com/600x400',
		github: 'https://github.com/thaiscmky/phonow',		
		livelink: 'https://phosho-phonow-production.herokuapp.com/',
		technologies: [react, node, node],
	},
	{
		direction: 'right',
		color: 'grey',
		title: 'Pho Now | CMS',
		subtitle: 'A trendy restaurant website on the customer face side with a back-end administrative side that acts as a Content Management System for the restaurant owner.',
		text: 'Pho Now uses Bootstrap4, HandleBars, and jQuery to deliver information to visitors. The site\'s pulls dynamic data from a MySQL DB using Sequalize as an ORM. Using the CMS\'s UI the owner can make live changes to the customer facing front-end. A Node.js server is hosted on Heroku along with a JawsDB.',
		media: 'http://via.placeholder.com/600x400',
		github: 'https://github.com/thaiscmky/phonow',		
		livelink: 'https://phosho-phonow-production.herokuapp.com/',
		technologies: [react, node, node],
	},
	{
		direction: 'left',
		color: 'black',
		title: 'Let\'s Eat',
		subtitle: 'A meet-up app for people who don\'t want to eat alone and would like to make friends by eating with people with similiar taste buds in the area',
		text: 'Let\'s Eat uses Bootstrap4 as a base for styling. A combination of Knockout.js and jQuery is used for page manipulation. The app is integrated with Google Maps API for location lookup and uses Yelp API to find restaurants nearby. The app is deployed on GitHub and uses Firebase for database updates',
		media: 'http://via.placeholder.com/600x400',
		github: 'https://github.com/thaiscmky/letseat',		
		livelink: 'https://thaiscmky.github.io/letseat/',
		technologies: [react, node, node],
	},
]

module.exports = projects;