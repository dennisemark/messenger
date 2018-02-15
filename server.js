var express = require('express'), //HTTP server framework module
    bodyParser = require('body-parser'),
    webhook = require('./modules/webhook'),
    app = express(); //creates express HTTP server

app.set('port', process.env.PORT || 5000); // Sets server port 

app.use(bodyParser.json());


//Creates the endpoint for the webhook
app.get('/webhook', webhook.handleGet);
app.post('/webhook', webhook.handlePost); 
/*This code 
	creates a /webhook endpoint that accepts POST requests, 
	checks the request is a webhook event, 
	then parses the message. 
This endpoint is where the Messenger Platform will send all webhook events
*/


//This code creates an HTTP server that listens for requests on the default port, or port 5000 if there is no default.
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
