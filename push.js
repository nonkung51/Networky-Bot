const fetch = require('node-fetch');
const { MESSAGING_API_KEY } = require('./config')

const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message';
const LINE_HEADER = {
	'Content-Type': 'application/json',
	Authorization: `Bearer ${MESSAGING_API_KEY}`,
};

const push = (to, messages) => {
	return fetch(`${LINE_MESSAGING_API}/push`, {
		method: 'post',
		headers: LINE_HEADER,
		body: JSON.stringify({
			to,
			messages: [messages],
		}),
	});
};

module.exports = push;
