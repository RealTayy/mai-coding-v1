On heroku it says we should redirect on the application level (https://help.heroku.com/J2R1S4T8/can-heroku-force-an-application-to-use-ssl-tls)

>Redirects need to be performed at the application level as the Heroku router does not provide this functionality. You should code the redirect logic into your application.

So we will use an npm package called `heroku-ssl-redirect
` to accomplish this for us automatically (https://www.npmjs.com/package/heroku-ssl-redirect)


When you enable ACM, ensure that your DNS is pointed at its new DNS target. If it’s pointed at *.herokuapp.com or *.herokussl.com, Heroku is unable to verify your certificate. Run heroku domains to verify the DNS target.

www.maicoding.me.herokudns.com
