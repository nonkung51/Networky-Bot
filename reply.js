const fetch = require('node-fetch');
const { MESSAGING_API_KEY } = require('./config')

const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message';
const LINE_HEADER = {
	'Content-Type': 'application/json',
	Authorization: `Bearer ${MESSAGING_API_KEY}`,
};

const reply = (replyToken, messages) => {
	return fetch(`${LINE_MESSAGING_API}/reply`, {
		method: 'POST',
		headers: LINE_HEADER,
		body: JSON.stringify({
			replyToken,
			messages: [messages],
		}),
	});
};

module.exports = reply;
