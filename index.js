const express = require('express');
const bodyParser = require('body-parser');

const reply = require('./reply');
const push = require('./push');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
	let replyToken = req.body.events[0].replyToken;
	let userId = req.body.events[0].source.userId;
	let msg = req.body.events[0].message.text;
	let event = req.body.events[0];

	console.log('event:', event)
	
	reply(replyToken, { type: 'text', text: msg });
	push(userId, { type: 'text', text: 'push!' });
	res.sendStatus(200);
});

app.listen(port);