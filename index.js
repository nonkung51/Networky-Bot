const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const { MESSAGING_API_KEY } = require('./config');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/webhook', (req, res) => {
	let reply_token = req.body.events[0].replyToken;
	let msg = req.body.events[0].message.text;
	reply(reply_token, msg);
	res.sendStatus(200);
});

app.listen(port);

function reply(reply_token, msg) {
	let headers = {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${MESSAGING_API_KEY}`,
	};
	let body = JSON.stringify({
		replyToken: reply_token,
		messages: [
			{
				type: 'text',
				text: msg,
			},
		],
	});

	axios.post('https://api.line.me/v2/bot/message/reply', body, { headers });
}