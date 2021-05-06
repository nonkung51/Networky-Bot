const express = require('express');
const bodyParser = require('body-parser');

const reply = require('./reply');
const push = require('./push');

const { carousel } = require('./carousel');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
	let replyToken = req.body.events[0].replyToken;
	let userId = req.body.events[0].source.userId;
	let event = req.body.events[0];

	console.log('event:', event);

	if (event.type == 'message') {
		switch (event.message.text) {
			case 'Flow ทั้งหมด':
				await push(userId, carousel);
				break;
			case 'ประยุทธ์':
				await push(userId, { type: 'text', text: 'ข้อมูลประยุทธ์ 1' });
				await push(userId, { type: 'text', text: 'ข้อมูลประยุทธ์ 2' });
				break;
			case 'ประวิทย์':
				await push(userId, { type: 'text', text: 'ข้อมูลประวิทย์ 1' });
				await push(userId, { type: 'text', text: 'ข้อมูลประวิทย์ 2' });
				break;
			case 'แป้ง!!':
				await push(userId, { type: 'text', text: 'มันคือแป้ง!! 1' });
				await push(userId, { type: 'text', text: 'มันคือแป้ง!! 2' });
				break;
			default:
				reply(replyToken, {
					type: 'text',
					text: 'น้อง Networky ไม่เข้าใจคำถามของคุณ ;-;',
				});
		}
	} else if (event.type == 'follow') {
		push(userId, carousel);
	}

	res.sendStatus(200);
});

app.listen(port);
